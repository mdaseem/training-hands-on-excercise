import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization; // Bearer token
    const token = authHeader?.split(" ")[1];
    if (token !== "undefined") {
      jwt.verify(
        token || "",
        process?.env?.SECRET_KEY || "OtherSecretKey",
        (err, decodedToken) => {
          if (err) res.status(500).json({ err: "Invalid Token" });
          console.log(token);
          console.log(decodedToken);
        }
      );
      next();
    } else {
      return res.status(401).json({ msg: "Token not found !" });
    }
  } catch (error) {
    console.log(error);
  }
};
