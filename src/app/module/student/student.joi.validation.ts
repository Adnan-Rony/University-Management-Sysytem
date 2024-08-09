
import Joi from "Joi";
const userNameJoiSchema = Joi.object({

    firstName: Joi.string().trim().max(20).required().messages({
      "string.max": "Firstname cannot be more than 20 characters",
      "any.required": "Firstname is required",
    }),
    middleName: Joi.string().alphanum().required().messages({
      "string.alphanum":
        "Middle name must contain only alphanumeric characters",
      "any.required": "Middle name is required",
    }),
    lastName: Joi.string().required().messages({
      "any.required": "Last name is required",
    }),
  });

  // Guardian Joi Schema
  const guardianJoiSchema = Joi.object({
    fathername: Joi.string().required().messages({
      "any.required": "Father name is required",
    }),
    mothername: Joi.string().required().messages({
      "any.required": "Mother name is required",
    }),
    fatheroccupation: Joi.string().required().messages({
      "any.required": "Father occupation is required",
    }),
    motherContactNumber: Joi.string().required().messages({
      "any.required": "Mother contact number is required",
    }),
    fatherNumber: Joi.string().required().messages({
      "any.required": "Father contact number is required",
    }),
  });

  // Student Joi Schema
  const studentValidationJoiSchema = Joi.object({
    id: Joi.string().required().messages({
      "any.required": "ID is required",
    }),
    name: userNameJoiSchema.required().messages({
      "any.required": "Name is required",
    }),
    gender: Joi.string().valid("female", "male").required().messages({
      "any.only": "Gender must be female or male",
      "any.required": "Gender is required",
    }),
    dateOfBirth: Joi.string().required().messages({
      "any.required": "Date of birth is required",
    }),
    contactNumber: Joi.string().required().messages({
      "any.required": "Contact number is required",
    }),
    emergencyNumber: Joi.string().required().messages({
      "any.required": "Emergency number is required",
    }),
    bloodType: Joi.string()
      .valid("A+", "AB+", "AB-", "B+", "O+", "O-")
      .messages({
        "any.only": "Blood type must be one of [A+, AB+, AB-, B+, O+, O-]",
      }),
    email: Joi.string().email().required().messages({
      "string.email": "Email is not valid",
      "any.required": "Email is required",
    }),
    isactive: Joi.string()
      .valid("active", "inactive")
      .required()
      .default("active")
      .messages({
        "any.only": "Status must be active or inactive",
        "any.required": "Status is required",
      }),
    avatar: Joi.string().uri().messages({
      "string.uri": "Avatar must be a valid URI",
    }),
    permanentAddress: Joi.string().optional(),
    guardian: guardianJoiSchema.required().messages({
      "any.required": "Guardian information is required",
    }),
    profileImg: Joi.string().uri().messages({
      "string.uri": "Profile image must be a valid URI",
    }),
  });



  export default studentValidationJoiSchema