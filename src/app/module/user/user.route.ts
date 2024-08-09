import express, { NextFunction, Request, Response } from "express";
import { UserControler } from "./user.controler";

import { AnyZodObject } from "zod";
import { studentValidation } from "../student/student.zod.validation";
import ValidationRequest from "../../utils/validRequest";




const router = express.Router();



router.post(
  "/create-student",
  ValidationRequest(studentValidation.CreateStudentValidationSchema),
  UserControler.createStudent
);

export const UserRoutes = router;
