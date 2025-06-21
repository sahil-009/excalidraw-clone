import { NextFunction ,Request ,Response } from "express";
import jwt from "jsonwebtoken";


export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    if (!decoded || !decoded.userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    req.userId = decoded.userId; // Assuming you want to attach userId to the request object
    next();
};