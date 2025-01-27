import config from "../../config";
import { Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from "../student/student.model";
import { AcademicSemesterModel } from "../academicSemester/AcademicSemester.model";
import { TStudent } from "../student/student.interface";
import { generateStudentId } from "./user.util";
import mongoose from "mongoose";

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // Create a user object
  const userData: Partial<Tuser> = {};

  // If password is not given, use default password
  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = "student";

  // Find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payLoad.AcademicSemister
  );

  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }

  const startSession = await mongoose.startSession();

  try {
    startSession.startTransaction();
    // Generate a student ID using the admission semester info
    userData.id = await generateStudentId(admissionSemester);

    // Create a user(transition 01)
    const newUser = await UserModel.create([userData], { startSession });

    if (!newUser.length) {
      throw new Error("Failed to create user");
    }
    payLoad.id = newUser[0].id;
    payLoad.user = newUser[0]._id; // ref id

    // Create a new student(transition 02)
    const newStudent = await Student.create([payLoad], { startSession });

    if(!newStudent){
      throw new Error("Failed to create student");
    }


     // Commit the transaction

     await startSession.commitTransaction();
     await startSession.endSession()

    return newStudent;


   
 
  } catch (err) {
    await startSession.abortTransaction();
    await startSession.endSession();
    throw err;
  }
};

export const UserService = {
  createStudentIntoDB,
};
