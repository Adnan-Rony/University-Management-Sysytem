import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
import cors from "cors";
import { StudentRoutes } from "./app/module/student/student.route";
import { UserRoutes } from "./app/module/user/user.route";
import GlobalError from "./app/middlware/GlobalErrorHandler";
import NotFound from "./app/middlware/NotFound";
import { AcademicSemesterRoutes } from "./app/module/academicSemester/AcademicSemester.Route";

app.use(express.json());

app.use(cors());

app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/academic-student", AcademicSemesterRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to Student API",
//     data: null,
//   });
// });

app.use(GlobalError);

//not found route
app.use(NotFound)

export default app;
