import { authOption } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/components/modules/Dashboard.module.css"
import User from "@/models/User";
import Contect from "@/utils/Conect";
import { getServerSession } from "next-auth";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
 import Image from "next/image";
import React from 'react'

export default async function Dashboard() {
     const {user : {email}}= await getServerSession(authOption)
      await Contect()
       const { createDate } = await User.findOne({ email });
 return (
   <div className={styles.container}>
     <div className={styles.right}>
       <h3>خوش آمدید🌹</h3>
       <h5 className=" text-gray-600 mb-5">
         {" "}
         امیدوارم همیشه تجربه خوبی در خانه تو داشته باشید{" "}
       </h5>
       <div className={styles.info}>
         <h4 className="text-black">اطلاعات کاربر:</h4>
         <div>
           <span>
             <MdOutlineMailOutline
               className="bg-blue-900 p-3  rounded-full"
               size={54}
               fill="#fff"
             />
             نام کاربری :
           </span>
           <p>{email}</p>
         </div>
   
         <div>
           <span>
             <FaRegCalendarAlt
               className="bg-blue-900 p-3  rounded-4xl"
               size={54}
               fill="#fff"
             />
             تاریخ عضویت :
           </span>
           <p>{new Date(createDate).toLocaleDateString("fa-ir")}</p>
         </div>
       </div>
     </div>

     <div className={styles.illustration}>
       <Image
         src="/pictures/account.png"
         alt="خانه تو"
         width={600}
         height={500}
         priority
         className={styles.homeImage}
       />
     </div>
   </div>
 );
}
