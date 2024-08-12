import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./AcademicSemesterinterface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  month,
} from "./AcademicSemester.const";

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: month,
    },
  },
  { timestamps: true }
);

//pre middleware use because same year different semester-name not applicable.

AcademicSemesterSchema.pre("save", async function (next) {
  const isSemesterExist = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExist) {
    throw new Error("semester already exists");
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemister",
  AcademicSemesterSchema
);

//autumn 01
//summar 02
//fall 03
