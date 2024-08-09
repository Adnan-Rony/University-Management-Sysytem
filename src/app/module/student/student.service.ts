import { TStudent } from "./student.interface";
import { Student } from "./student.model";



const getStudentintoDB = async () => {
  const result = await Student.find();
  return result;
};



const getsingleStudentIntoDB = async (id: String) => {
  // const result = await Student.findOne({ id });

  
  //used aggregate method ********************************
  const result=await Student.aggregate([{$match:{id:id}}])
  return result;
};

 


const deleteStudentFromDB = async (id: String) => {
  const result = await Student.updateOne({ id },{isDeleted:true});
  return result;
};

export const StudentServices = {
  
  getStudentintoDB,
  getsingleStudentIntoDB,
  deleteStudentFromDB
};
