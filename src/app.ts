import cors from "cors";
import express, { Application } from "express";
import GlobalErrorHandle from "./app/middlware/GlobalErrorHandler";
import NotFound from "./app/middlware/NotFound";
import { AcademicDepartmentRoutes } from "./app/module/AcademicDepartment/AcademicDepartment.route";
import { AcademicFacultyRoutes } from "./app/module/AcademicFaculty/AcademicFaculty.route";
import { AcademicSemesterRoutes } from "./app/module/academicSemester/AcademicSemester.Route";
import { StudentRoutes } from "./app/module/student/student.route";
import { UserRoutes } from "./app/module/user/user.route";
const app: Application = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/academic-student", AcademicSemesterRoutes);
app.use("/api/v1/academic-faculty", AcademicFacultyRoutes);
app.use("/api/v1/academic-department", AcademicDepartmentRoutes);

app.use(GlobalErrorHandle);

//not found route
app.use(NotFound);

export default app;
