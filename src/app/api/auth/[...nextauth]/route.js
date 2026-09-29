import User from "@/models/User";
import { VerifyPassword } from "@/utils/opration/HashPassword";
import Contect from "@/utils/Conect";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


 export const authOption = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("  لطفا تمامی فیلد هارا پر کنید ");
        }
        await Contect();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error(" کاربر ثبت نام نکرده است ");
      
        }
        const verifyPassword = await VerifyPassword(password, user.password);
        if (!verifyPassword) {
          throw new Error("  نام کاربری یا رمز عبور اشیباه است  ");
         console.log("  نام کاربری یا رمز عبور اشیباه است  ");
         
        }
        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
};


const handler= NextAuth(authOption);
export { handler as GET ,handler as POST}