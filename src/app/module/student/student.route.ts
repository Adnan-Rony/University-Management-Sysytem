import express from "express";
import { StudentControllers } from "./student.controler";

import validateRequest from "../../middlware/validRequest";
import { studentValidationSchema } from "./student.zod.validation";

const router = express.Router();

// router.post('/create-student',StudentControllers.createStudent)

router.get("/:studentid", StudentControllers.getsingleStudent);

router.delete("/:studentid", StudentControllers.DeleteStudent);

router.get("/", StudentControllers.getAllStudent);

router.patch(
    "/:studentid",
    validateRequest(studentValidationSchema.updateStudentValidationSchema),
    StudentControllers.UpdateStudent
  );
  

// router.patch('/:studentid',ValidationRequest)

export const StudentRoutes = router;
