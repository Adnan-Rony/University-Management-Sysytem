import express from "express";
import { UserControler } from "./user.controler";

import ValidationRequest from "../../utils/validRequest";
import { studentValidationSchema } from "../student/student.zod.validation";

const router = express.Router();

router.post(
  "/create-student",
  ValidationRequest(studentValidationSchema.CreateStudentValidationSchema),
  UserControler.createStudent
);

export const UserRoutes = router;
