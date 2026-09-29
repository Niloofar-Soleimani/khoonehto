"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/components/templates/SignUp.module.css";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import {signIn} from 'next-auth/react'

import { useRouter } from "next/navigation";
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const signInHandler = async (e) => {
    
    e.preventDefault();
 try {
const res = await signIn("credentials", {
  email,
  password,
  redirect: false,
});
     console.log("response", res);
  
      
     if( res.ok){
        toast.success("  خوش آمدید ")
        setTimeout(() => {
          router.push("/account");
        }, 1000);

     }else{
        toast.error(res?.error || "ایمیل یا رمز عبور اشتباه است");
     }
 } catch (error) {
   console.error("SIGN IN ERROR:", error);
   toast.error("خطایی در ورود رخ داد");
  
 }
 
  };
  return (
    <div className={styles.container}>
      <form>
        <div>
          <label htmlFor="email">ایمیل:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">رمز عبور:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={signInHandler}>  ورود </button>
        <div className={styles.link}>
          <Link href="signup">
            <p> ثبت نام | حساب کاربری ندارید؟ </p>
          </Link>
        </div>
      </form>
      <div className={styles.image}>
        <Image
          src="/pictures/signIn.jpg"
          width="320"
          height="150"
          alt="signin  خانه"
        />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
