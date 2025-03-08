import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const GlobalErrorHandle: ErrorRequestHandler = (err: any, req, res, next) => {

  // default value
  let statusCode = err.statuscode || 500;
  let message = err.message || "something went wrong";

  type TerrorSource={
    path:string | number,
    message:string
  }[];


  const errorSources:TerrorSource=[

    {
      path:'',
      message:'something is wrong'
    }
  ]















  
  if(err instanceof ZodError){
    statusCode=400;
    message='ami zod error'
  }


  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error:err
   
  });
};
export default GlobalErrorHandle;
