import express from "express";
import ValidationRequest from "../../utils/validRequest";
import { AcademicFacultyValidation } from "./AcademicFaculty.Validation";
import { AcademicFacultyControler } from "./AcademicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  ValidationRequest(AcademicFacultyValidation.CreateAcademicFacultyValidationSchema),
  AcademicFacultyControler.createAcademicFaculty
);

router.get("/", AcademicFacultyControler.getAllAcademicFaculty);

router.get("/:academicFacultyid", AcademicFacultyControler.getSingleAcademicFaculty);

router.patch(
  "/:academicFacultyid",
  ValidationRequest(AcademicFacultyValidation.UpdateAcademicFacultyValidationSchema),
  AcademicFacultyControler.UpdateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
