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
  const result = await Student.findById(id).populate
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
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getStudentintoDB,
  getsingleStudentIntoDB,
  deleteStudentFromDB,
};
