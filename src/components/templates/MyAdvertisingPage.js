
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/components/templates/MyAdvertising.module.css"
import User from "@/models/User";
import { getServerSession } from "next-auth";

import React from 'react'
import { Toaster } from "react-hot-toast";
import Card from "../modules/Card";

export default async function MyAdvertisingPage() {
    const session= await getServerSession(authOption);
     const [user]=await User.aggregate([{$match:{email:session.user.email}} , {$lookup:{
        from:"advertisings",
        foreignField :  "userId" ,
        localField :"_id",
        as:"myAdvertising"
     },}
    ])
     const { myAdvertising } = user;

 return (
   <div className={styles.container}>
     {myAdvertising.length ? null :( <p  className="text-black">  هیچ آگهی ثبت نشده است </p>)}
 {myAdvertising.map((item)=>(
    <Card   key={item._id.toString()}
  _id={item._id.toString()}
  title={item.title}
  location={item.location}
  price={item.price} />
 ))}
     <Toaster />
   </div>
 );
}
