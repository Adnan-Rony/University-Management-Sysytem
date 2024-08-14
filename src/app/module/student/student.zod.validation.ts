import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, "Firstname cannot be more than 20 characters")
    .nonempty("firstname is required"),
  middleName: z
    .string()
    .nonempty("middleName is required")
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Middle name must contain only letters",
    }),
  lastName: z.string().nonempty("lastName is required"),
});

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fathername: z.string().trim().nonempty("fathername is required"),
  mothername: z.string().nonempty("mothername is required"),
  fatheroccupation: z.string().nonempty("fatheroccupation is required"),
  motherContactNumber: z.string().nonempty("motherContactNumber is required"),
  fatherNumber: z.string().nonempty("fatherNumber is required"),
});

// Define the Zod schema for Student
const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().nonempty("password is required"),

    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "Gender must be female or male" }),
      }),
      dateOfBirth: z.string().optional(),
      contactNumber: z.string().nonempty("contactNumber is required"),
      emergencyNumber: z.string().nonempty("emergencyNumber is required"),
      bloodType: z
        .enum(["A+", "B+", "O+", "O-", "AB-", "AB+"], {
          required_error: "Invalid blood type",
        })
        .optional(),
      email: z
        .string()
        .nonempty("email is required")
        .email("Invalid email address"),
      avatar: z.string().url().optional(),
      permanentAddress: z.string().optional(),
      guardian: guardianValidationSchema,
      profileImg: z.string().url().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

export const studentValidation = {
  CreateStudentValidationSchema
};
