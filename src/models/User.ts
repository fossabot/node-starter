import mongoose from "mongoose";
import bCrypt from "bcrypt-nodejs";
import { generateJWT } from "../util/jwt";

export type UserDocument = mongoose.Document & {
    email: string;
    password: string;
    comparePassword: comparePasswordFunction;
    generateJWTToken: generateJWTTokenFunction;
};

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => void) => void;
type generateJWTTokenFunction = () => string;

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

userSchema.pre("save", function save(next) {
    const user = this as UserDocument;
    if (!user.isModified("password")) {
        return next();
    }
    bCrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bCrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
    return bCrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        return cb(err, isMatch);
    });
};

const generateJWTToken: generateJWTTokenFunction = function() {
    return generateJWT({
        email: this.email,
        _id: this._id
    });
};

userSchema.methods.comparePassword = comparePassword;
userSchema.methods.generateJWTToken = generateJWTToken;

export const User = mongoose.model<UserDocument>("User", userSchema);
