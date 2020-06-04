import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User";
import { JWTUser } from "../../middlewares/authenticate";

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = new User({
        email,
        password
    });
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return res.status(406).json({
                error: true,
                errors: err
            });
        }
        if (existingUser) {
            return res.status(409).json({
                error: true,
                errors: "User already exists"
            });
        }
        user.save((err) => {
            if (err) {
                return res.status(406).json({
                    error: true,
                    errors: err
                });
            }
            return res.status(201).json({
                message: "User Registered"
            });
        });
    });
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return res.status(406).json({
                error: true,
                errors: err
            });
        }
        if (!existingUser) {
            return res.status(406).json({
                error: true,
            });
        }
        existingUser.comparePassword(password, (err: Error, isMatch: boolean) => {
            if (err) {
                return res.status(406).json({
                    error: true,
                    errors: err
                });
            }
            if (isMatch) {
                return res.status(200).json({
                    token: existingUser.generateJWTToken()
                });
            }
            return res.status(401).json({
                error: true,
                errors: "Wrong Credentials"
            });
        });
    });
};

export const getCurrentUser = async (req: Request, res: Response) => {
    const { user } = req;
    if (user._id === req.params.userId) {
        return res.status(200).json({
            message: "Same User",
            user
        });
    }
    return res.status(401).json({
        error: true,
        errors: "Different User ID"
    });
};
