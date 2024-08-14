import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import SendResponse from "../../utils/SendResponse";
import { AcademicFacultyService } from "./AcademicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res, next) => {
  //   const {  } = req.body;
  console.log("Received request body:", req.body);

  const result = await AcademicFacultyService.CreateAcademicFaculty(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Academic faculty is created successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await AcademicFacultyService.getAllAcademicFaculty();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all faculty  successfully",
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res, next) => {
  const {  academicFacultyid } = req.params;
  const result = await AcademicFacultyService.getsingleAcademicFaculty(
    academicFacultyid
  );
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get single faculty  successfully",
    data: result,
  });
});
const UpdateAcademicFaculty = catchAsync(async (req, res) => {
  const { academicFacultyid } = req.params;
  const result = await AcademicFacultyService.updateAcademicFaculty(
    academicFacultyid,
    req.body
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "update faculty  successfully",
    data: result,
  });
});

export const AcademicFacultyControler = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  UpdateAcademicFaculty,
};
