export type TMonths =
  | "january"
  | "february"
  | "mar"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "octub"
  | "november"
  | "december";

export type TAcademicSemesterName = "autumn" | "fall" | "summer";
export type TAcademicSemesterCode = "01" | "02" | "03";




export type TAcademicSemester = {
  name: TAcademicSemesterName
  code: TAcademicSemesterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};
