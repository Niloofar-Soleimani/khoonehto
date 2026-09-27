import User from "@/models/User";
import { VerifyPassword } from "@/utils/opration/HashPassword";
import { connect } from "mongoose";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


const authOption = {
  session: { strategy: "jwt" },
  providers: [Credentials({
    async authorize(credential){
        const {email , password} = credential;
        if(!email || !password){
            throw new Error ("  لطفا تمامی فیلد هارا پر کنید ")
        }
         await connect();
         const user =await User.findOne({email})
         if(!user){throw new Error( " کاربر ثبت نام نکرده است ")
             return;
         }
          const verifyPassword =await VerifyPassword(password , user.password)
         if(!verifyPassword){
            throw new Error("  نام کاربری یا رمز عبور اشیباه است  ")
            return
         }
         return {email}
    }
  })],
};


const handler= NextAuth(authOption);
export { handler as GET ,handler as POST}