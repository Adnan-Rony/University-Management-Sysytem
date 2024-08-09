import { model, Schema } from "mongoose";
import { TAcademicSemester, TAcademicSemesterCode, TAcademicSemesterName, TMonths } from "./AcademicSemesterinterface";
import { AcademicSemesterCode, AcademicSemesterName, month } from "./AcademicSemester.const";




const AcademicSemesterSchema=new Schema<TAcademicSemester>({
    name:{
        type:String,
        required:true,
        enum:AcademicSemesterName
    },
    code:{
        type:String,
        required:true,
        enum:AcademicSemesterCode
    },
    year:{
        type:String,
        required:true,
    },
    startMonth:{
        type:String,
        required:true,
        enum:month
    },
    endMonth:{
        type:String,
        required:true,
        enum:month
        
    }
})

export const AcademicSemesterModel=model<TAcademicSemester>('AcademicSemister',AcademicSemesterSchema)