import { Schema, model } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

import validator from "validator";
import bcrypt from "bcrypt";
import config from "../../config";
import { date } from "zod";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: "string",
    trim: true,
    maxlength: [20, "Firstname cannot be more than 20 characters"],
    required: [true, "firstname is required"],
  },

  middleName: {
    type: "string",
    required: [true, "middleName is required"],
    validate: {
      validator: (value: string) => {
        return validator.isAlpha(value);
      },
      message: (props: any) => `${props.value} is not a valid name`,
    },
  },
  lastName: {
    type: "string",
    required: [true, "lastName is required"],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fathername: {
    type: "string",
    trim: true,

    required: [true, "fathername is required"],
  },
  mothername: { type: "string", required: true },
  fatheroccupation: { type: "string", required: true },
  motherContactNumber: { type: "string", required: true },
  fatherNumber: { type: "string", required: true },
});

const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: "string", required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required:[true,'user id must be provided'],
      unique: true,
      ref:'User',
    },
   
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: "string",
      enum: {
        values: ["female", "male"],
        message: "Gender must be female or male",
      },

      required: true,
    },
    dateOfBirth:{type:Date},
    contactNumber: { type: "string", required: true },
    emergencyNumber: { type: "string", required: true },
    bloodType: {
      type: "string",
      enum: ["A+", "AB+", "AB-", "B+", "O+", "O-"],
    },
    email: {
      type: "string",
      required: true,
      validate: {
        validator: (value: string) => {
          return validator.isEmail(value);
        },
        message: (props: any) => `${props.value} is not a valid email`,
      },
    },


    avatar: { type: "string" },
    permanentAddress: { type: "string" },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    profileImg: { type: "string" },
    isDeleted: {
      type: "boolean",
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// **********virtual****************
StudentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});



//****************  Query middleware ****************

StudentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// when used findOne then not find the single data but used only find query then will be show single data

StudentSchema.pre("find", function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

// ******** aggregate ****************

StudentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method ************

StudentSchema.statics.isUserExits = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};



export const Student = model<TStudent, StudentModel>("Student", StudentSchema);
