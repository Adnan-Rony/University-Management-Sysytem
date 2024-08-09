import SendResponse from "../../utils/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import { AcademicSemesterService } from "./Academic.Semester.service";

const createAcademicSemester = catchAsync(async (req, res, next) => {
  //   const {  } = req.body;
  console.log('Received request body:', req.body); 
  
  const result = await AcademicSemesterService.createAcademicSemesterIntoDb(
    req.body
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic semester is created successfully",
    data: result,
  });
});

export const AcademicSemesterControler = {
  createAcademicSemester,
};
