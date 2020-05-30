import express from "express";
import * as userController from "../controllers/user";
import * as userControllerValidators from "../controllers/user/validators";
import * as authenticateMiddleWares from "../middlewares/authenticate";

const userRouter = express.Router();

userRouter.post("/", userControllerValidators.createUser, userController.createUser);
userRouter.post("/login", userControllerValidators.loginUser, userController.loginUser);
userRouter.get("/:userId", authenticateMiddleWares.authenticateToken, userController.getCurrentUser);

export default userRouter;