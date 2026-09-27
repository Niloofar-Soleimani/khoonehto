import User from "@/models/User";
import Contect from "@/utils/Conect";
import {HashPassword }from "@/utils/opration/HashPassword";

import { NextResponse } from "next/server";


  export async function POST(req) {


    try{
        const { email, password } = await req.json();
        if (!email || !password) {
          return NextResponse.json({
            status: 442,
            message: "  مقدار خالی را پر کنید ",
          });
        }
 await Contect()

const user= await User.findOne({email})
if(user){
    return NextResponse.json({status:401 , message: " کاربر تکراری میباشد "})
}
 const hashPassword= await HashPassword(password)
  const newUser= await User.create({
    email,
    password:hashPassword
  })
   return NextResponse.json({status:201 , message:" کاربر با موفقیت ثبت شد " , data:newUser})
    }catch(error){
 console.error("SIGNUP ERROR:", error);

 return NextResponse.json(
   {
     message: "خطایی در ثبت نام رخ داد",
     error: error.message,
   },
   {
     status: 500,
   }
 );

    }
}