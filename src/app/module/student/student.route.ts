import express from "express";
import { StudentControllers } from "./student.controler";


const router = express.Router();


// router.post('/create-student',StudentControllers.createStudent)

router.get("/:studentid",StudentControllers.getsingleStudent)
router.delete("/:studentid",StudentControllers.DeleteStudent)
router.get("/",StudentControllers.getAllStudent)



export const StudentRoutes = router;