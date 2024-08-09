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

export const AcademicSemesterValidation = {
  AcademicSemesterValidationSchema,
};
