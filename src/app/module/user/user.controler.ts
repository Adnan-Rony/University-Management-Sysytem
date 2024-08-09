
import { UserService } from "./user.service";
import SendResponse from "../../utils/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;



  const result = await UserService.createStudentIntoDB(password, studentData);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Student created successfully",
    data: result,
  });
});

export const UserControler = {
  createStudent,
};
