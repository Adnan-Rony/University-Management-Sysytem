import express from "express";
import ValidationRequest from "../../utils/validRequest";
import { AcademicdepartmentidValidation } from './AcademicDepartment.validation';
import { AcademicdepartmentidController } from "./AcademicDepartment.controller";
;

const router = express.Router();

router.post(
  "/create-academic-department",
  ValidationRequest(AcademicdepartmentidValidation.CreateAcademicDepartmentValidationSchema),
  AcademicdepartmentidController.createAcademicDepartment
);

router.get("/", AcademicdepartmentidController.getAllAcademicDepartment);

router.get("/:departmentid", AcademicdepartmentidController.getSingleAcademicDepartment);

router.patch(
  "/:departmentid",
  ValidationRequest(AcademicdepartmentidValidation.UpdateAcademicDepartmentValidationSchema),
  AcademicdepartmentidController.UpdateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
