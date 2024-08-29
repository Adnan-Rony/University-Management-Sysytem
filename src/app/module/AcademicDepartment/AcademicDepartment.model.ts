import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./AcademicDepartment.interface";

const academicDepartment = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: "AcademicFaculty",
    
  },
});

academicDepartment.pre("save", async function (next) {
  const isDepartmentExist = await academicDepartmentModel.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error("this Department already exists");
  }
  next();
});

//buji nai
// class AppError extends Error{
//   public statusCode: number;
// }










academicDepartment.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  console.log(query);

  const isDepartmentExist = await academicDepartmentModel.findOne(query);
  if (!isDepartmentExist) {
    throw new Error("this Department doesnot exist");
  }
  next();
});

export const academicDepartmentModel = model<TAcademicDepartment>(
  "academicDepartment",
  academicDepartment
);
