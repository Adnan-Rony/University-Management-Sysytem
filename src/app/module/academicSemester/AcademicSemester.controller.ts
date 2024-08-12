import SendResponse from "../../utils/SendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import { AcademicSemesterService } from "./Academic.Semester.service";

const createAcademicSemester = catchAsync(async (req, res, next) => {
  //   const {  } = req.body;
  console.log("Received request body:", req.body);

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

const getAllAcademicSemesters = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.allacademicSemestersIntoDb();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get all Academic Semesters successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const { semesterid } = req.params;
  const result = await AcademicSemesterService.getSingleAcademicSemester(
    semesterid
  );
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "get single Academic Semesters successfully",
    data: result,
  });
});
const UpdateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterid } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemester(
    semesterid,
    req.body
  );

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "update Academic Semesters successfully",
    data: result,
  });
});

export const AcademicSemesterControler = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  UpdateAcademicSemester,
};
