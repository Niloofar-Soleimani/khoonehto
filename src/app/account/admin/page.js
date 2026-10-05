import { authOption } from "@/app/api/auth/[...nextauth]/route"
import AdminPage from "@/components/templates/AdminPage"

import Advertising from "@/models/Advertising"
import User from "@/models/User"
import Contect from "@/utils/Conect"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "    پنل کاربری ادمین ",
  description: "  خرید فروش خانه ویلا رهن اجاره ایران ",
  icons: { icon: "./favicon.ico" },
};

export default async function page() {
     const session= await getServerSession(authOption)
    await Contect()
     const {role}=await User.findOne({email : session.user.email })
     if(role !== "ADMIN") redirect("/account");
     const advertisingData = await Advertising.find({
       published: false,
     }).lean();


  return <AdminPage advertisingData={advertisingData} />;
}
