import { Router } from "express";
import { UserRoutes } from "../module/user/user.route";
import { StudentRoutes } from "../module/student/student.route";
import { AcademicSemesterRoutes } from "../module/academicSemester/AcademicSemester.Route";

const router = Router();

const moduleRoute = [
    { 
        path: "/users" ,
        route:UserRoutes
    },
    { 
        path: "/students" ,
        route:StudentRoutes
    },
    { 
        path: "/academic-semester" ,
        route:AcademicSemesterRoutes
    },
]
    
moduleRoute.forEach((route) => router.use(route.path,route.route))
