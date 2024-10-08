import { z } from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  month,
} from "./AcademicSemester.const";

const AcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),


    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...month] as [string, ...string[]]),
    endMonth: z.enum([...month] as [string, ...string[]]),


  }),
  

});
const updateAcademicSemesterValidationSchema=z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]).optional(),


    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...month] as [string, ...string[]]).optional(),
    endMonth: z.enum([...month] as [string, ...string[]]).optional(),


  }),
  

});

export const AcademicSemesterValidation = {
  AcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema
};
