
import { StudentServices } from "./student.service";
import SendResponse from "../../utils/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";



const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getStudentintoDB();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all Student successfullyyyy",
    data: result,
  });
});

const getsingleStudent = catchAsync(async (req, res, next) => {
  const { studentid } = req.params;
  const result = await StudentServices.getsingleStudentIntoDB(studentid);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get single Student successfullyy",
    data: result,
  });
});

const DeleteStudent = catchAsync(async (req, res, next) => {
  const { studentid } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentid);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Delete Student successfully",
    data: result,
  });
});

export const StudentControllers = {
  getAllStudent,
  getsingleStudent,
  DeleteStudent,
};
