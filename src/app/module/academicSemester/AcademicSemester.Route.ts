import express from "express";
import { AcademicSemesterControler } from "./AcademicSemester.controller";
import ValidationRequest from "../../utils/validRequest";
import { AcademicSemesterValidation } from "./AcademicSemester.Validation";

const router = express.Router();

// router.post(
//   "/create-academic-semester",
  
//   AcademicSemesterControler.createAcademicSemester
// );
router.post(
  "/create-academic-semester",
  ValidationRequest(
    AcademicSemesterValidation.AcademicSemesterValidationSchema
  ),
  AcademicSemesterControler.createAcademicSemester
);


export const AcademicSemesterRoutes = router;
