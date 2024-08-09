import { NextFunction, Request, Response } from "express";
import { number } from "zod";

type Tresponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

const SendResponse = <T>(res: Response, data: Tresponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default SendResponse;
