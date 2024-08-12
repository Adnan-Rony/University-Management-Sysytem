import express from "express";
import { AcademicSemesterControler } from "./AcademicSemester.controller";
import ValidationRequest from "../../utils/validRequest";
import { AcademicSemesterValidation } from "./AcademicSemester.Validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  ValidationRequest(
    AcademicSemesterValidation.AcademicSemesterValidationSchema
  ),
  AcademicSemesterControler.createAcademicSemester
);

router.get(
  "/",
  AcademicSemesterControler.getAllAcademicSemesters
);

router.get("/:semesterid",AcademicSemesterControler.getSingleAcademicSemester)



router.patch("/:semesterid", ValidationRequest(AcademicSemesterValidation.updateAcademicSemesterValidationSchema),
  AcademicSemesterControler.UpdateAcademicSemester)

export const AcademicSemesterRoutes = router;
