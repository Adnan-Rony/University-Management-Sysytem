import { TAcademicFaculty } from "./AcademicFaculty.interface";
import { AcademicFacultyModel } from "./AcademicFaculty.model";

const CreateAcademicFaculty = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};
const getAllAcademicFaculty = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};
const getsingleAcademicFaculty = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

const updateAcademicFaculty = async (
  id: string,
  payload: Partial<TAcademicFaculty>
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  CreateAcademicFaculty,
  getAllAcademicFaculty,
  getsingleAcademicFaculty,
  updateAcademicFaculty
};
