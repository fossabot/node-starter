import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export type JWTUser = {
  _id: string;
  email: string;
};

declare module 'express' {
  export interface Request {
    user?: JWTUser;
  }
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers.authorization;
  const token = authHeaders && authHeaders.split(' ')[1];
  if (token) {
    return jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
      (err: any, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        return next();
      }
    );
  }
  return res.sendStatus(401);
};
