import { TAcademicSemester } from "../academicSemester/AcademicSemesterinterface";
import { UserModel } from "./user.model";

const findLastStudentId = async () => {
  const LastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({ createdAt: -1 })
    .lean();
  return LastStudent?.id ? LastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time 0000
  //0001  => 1
  //2030 01 0001
  let currentId = (0).toString(); //0000
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode=lastStudentId?.substring(4,6)//01
  const lastStudentYear=lastStudentId?.substring(0,4)//2030
  const currentSemesterCode=payload.code
  const currentYear=payload.year

  if (lastStudentId && lastStudentSemesterCode == currentSemesterCode && lastStudentYear == currentYear) {
    currentId = lastStudentId.substring(6,)
   
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
