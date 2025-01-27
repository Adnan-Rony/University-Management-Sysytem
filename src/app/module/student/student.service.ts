import mongoose from "mongoose";
import { UserModel } from "../user/user.model";
import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const getStudentintoDB = async () => {
  const result = await Student.find().populate
  ("AcademicSemister") .populate({
    path: "academicDepartment",
    populate:{
      path: "academicFaculty",
    }
  });
 
  return result;
};

const getsingleStudentIntoDB = async (id: String) => {
  const result = await Student.findOne({id}).populate
  ("AcademicSemister") .populate({
    path: "academicDepartment",
    populate:{
      path: "academicFaculty",
    }
  });

  //used aggregate method ********************************
  // const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentFromDB = async (id: String) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction(); // Start the transaction

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session } // Pass session here
    );

    if (!deletedStudent) {
      throw new Error("Student not found or not deleted");
    }

    const deletedUser = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session } // Pass session here
    );

    if (!deletedUser) {
      throw new Error("User not found or not deleted");
    }

    await session.commitTransaction(); // Commit the transaction
    await session.endSession()
    return deletedStudent; // Return the deleted student document
  } catch (err) {
    await session.abortTransaction(); // Abort the transaction if an error occurs
    await session.endSession()
    throw new Error('Session abortt');  //13-10
  } 
};

const updateStudent = async (id: String) => {
  const result = await Student.findOne({id})


  return result;
};


export const StudentServices = {
  getStudentintoDB,
  getsingleStudentIntoDB,
  deleteStudentFromDB,
  updateStudent
};
