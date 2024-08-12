import { REFUSED } from "dns";
import config from "../../config";
import { Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from "../student/student.model";
import { TAcademicSemester } from "../academicSemester/AcademicSemesterinterface";
import { AcademicSemesterModel } from "../academicSemester/AcademicSemester.model";
import { TStudent } from "../student/student.interface";
import { generateStudentId } from "./user.util";


const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // Create a user object
  const userData: Partial<Tuser> = {};

  // If password is not given, use default password
  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = "student";

  // Find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payLoad.admissionSemester
  );

  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }

  // Generate a student ID using the admission semester info
  userData.id =await generateStudentId(admissionSemester);

  // Create a user
  const newUser = await UserModel.create(userData);

  // Create a student
  // User is ID
  if (Object.keys(newUser).length) {
    payLoad.id = newUser.id;
    payLoad.user = newUser._id; // ref id

    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
