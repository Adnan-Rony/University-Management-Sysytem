import { TAcademicSemesterCode, TAcademicSemesterName, TacademicSemesterNameCodeMapper, TMonths } from "./AcademicSemesterinterface"

export const month:TMonths[]=[
    'january','february','mar','april','may','june','july','august','september','octub','november','december'
]

 export const AcademicSemesterName:TAcademicSemesterName[]=[
    'autumn','fall','summer'
]
export const AcademicSemesterCode:TAcademicSemesterCode[]=[
   '01','02','03'
]

export const academicSemesterNameCodeMapper: TacademicSemesterNameCodeMapper = {
    autumn: "01",
    summer: "02",
    fall: "03",
  };


