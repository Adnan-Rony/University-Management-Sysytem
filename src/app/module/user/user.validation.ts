import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string({invalid_type_error:"password must be string"})
    .max(20, { message: "Password can not be less than 20 characters" })
    .optional(),

  

  isDelete: z.boolean().default(false).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
