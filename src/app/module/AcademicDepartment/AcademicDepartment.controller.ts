import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import SendResponse from "../../utils/SendResponse";
import { AcademicDepartmentService } from "./AcademicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res, next) => {
  //   const {  } = req.body;
  console.log("Received request body:", req.body);

  const result = await AcademicDepartmentService.CreateAcademicDepartment(
    req.body
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic department is created successfully",
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res, next) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartment();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all department  successfully",
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res, next) => {
  const { departmentid } = req.params;
  const result = await AcademicDepartmentService.getsingleAcademicdepartment(
    departmentid
  );
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get single department  successfully",
    data: result,
  });
});
const UpdateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentid } = req.params;
  const result = await AcademicDepartmentService.updateAcademicDepartment(
    departmentid,
    req.body
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "update department  successfully",
    data: result,
  });
});

export const AcademicdepartmentidController = {
  UpdateAcademicDepartment,
  getSingleAcademicDepartment,
  getAllAcademicDepartment,
  createAcademicDepartment,
};
