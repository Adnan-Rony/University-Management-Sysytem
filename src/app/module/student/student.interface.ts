import { Model, Types } from "mongoose";
import { date } from 'zod';

// 1. Create an interface representing a document in MongoDB.
export type TGuardian = {
  fathername: string;
  fatheroccupation: string;
  mothername: string;
  motherContactNumber: string;
  fatherNumber: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user:Types.ObjectId;
  password: string;
  name: TUserName;
  gender: "male" | "female";
  dateOfBirth: Date,
  contactNumber: string;
  emergencyNumber: string;
  bloodType?: "A+" | "B+" | "O+" | "O-" | "AB-" | "AB+";
  email: string;
  avatar?: string;
  permanentAddress?: string;
  guardian: TGuardian;
  profileImg?: string;

 
  isDeleted:boolean
};















//for creating static

export interface StudentModel extends Model<TStudent> {
  isUserExits(id:string):Promise<TStudent | null>
}





//for  creating instances
// export interface StudentMethods {
//   isUserExits(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;
