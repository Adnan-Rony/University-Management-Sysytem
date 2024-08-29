import { NextFunction, Request, Response } from "express";

const GlobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statuscode || 500;
  let message = err.message || "something went wrong";
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
export default GlobalError;
