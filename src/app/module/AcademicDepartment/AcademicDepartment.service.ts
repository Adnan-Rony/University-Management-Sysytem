import { TAcademicFaculty } from "../AcademicFaculty/AcademicFaculty.interface";

import { TAcademicDepartment } from "./AcademicDepartment.interface";
import { academicDepartmentModel } from "./AcademicDepartment.model";

const CreateAcademicDepartment = async (payload: TAcademicDepartment) => {
  

  const result = await academicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartment = async () => {
  const result = await academicDepartmentModel.find().populate('academicFaculty');
  return result;
};
const getsingleAcademicdepartment = async (id: string) => {
  const result = await academicDepartmentModel.findById(id).populate('academicFaculty');
  return result;
};

const updateAcademicDepartment = async (



  id: string,
  payload: Partial<TAcademicDepartment>
) => {
  const result = await academicDepartmentModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentService = {
  updateAcademicDepartment,
  getsingleAcademicdepartment,
  getAllAcademicDepartment,
  CreateAcademicDepartment,
};
