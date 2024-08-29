import {
  TAcademicSemester,
  TAcademicSemesterCode,
} from "./AcademicSemesterinterface";
import {
  AcademicSemesterCode,
  academicSemesterNameCodeMapper,
} from "./AcademicSemester.const";
import { AcademicSemesterModel } from "./AcademicSemester.model";

const createAcademicSemesterIntoDb = async (payLoad: TAcademicSemester) => {
  //smester name ==> semester code

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error(`Invalid semester code`);
  }

  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

const allacademicSemestersIntoDb = async () => {
  const result = await AcademicSemesterModel.find();
  console.log("Fetched Semesters:", result);
  return result;
};
const getSingleAcademicSemester = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid semester code");
  }
  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDb,
  allacademicSemestersIntoDb,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
