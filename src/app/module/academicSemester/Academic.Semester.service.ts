import { TAcademicSemester, TAcademicSemesterCode } from "./AcademicSemesterinterface";
import { AcademicSemesterCode } from "./AcademicSemester.const";
import { AcademicSemesterModel } from "./AcademicSemester.model";

const createAcademicSemesterIntoDb = async (payLoad: TAcademicSemester) => 
    {
  const result = await AcademicSemesterModel.create(payLoad);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDb,
};
