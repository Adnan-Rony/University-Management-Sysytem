import { REFUSED } from "dns";
import config from "../../config";
import { NewUser, Tuser } from "./user.interface";
import { UserModel } from "./user.model";
import { Student } from "../student/student.model";

const createStudentIntoDB = async (password: string, studentData: Tuser) => {
  //create a user object
  const userData: Partial<Tuser> = {};

  //if password is not given,use default password
  userData.password = password || (config.DEFAULT_PASS as string);

  userData.role = "student";

  userData.id = "20301000";
  //create a user
  const newUser = await UserModel.create(userData);

  //create a student
  //user is id
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //ref id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
