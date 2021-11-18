import {executeQuery} from "../../config/db";

export const getAllEmployee = async(req,res)=>{
    let empData = await executeQuery("select * from employee",[]); 
    res.send(empData);
} 
