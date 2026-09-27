
"use client";
import Link from "next/link";
import React, { useState  } from 'react'
import styles from "@/components/templates/SignUp.module.css"
import Image from "next/image";
import toast ,{Toaster} from "react-hot-toast";

import { useRouter } from "next/navigation";
export default function SignUpPage() {
     const [email , setEmail]=useState("")
     const [password , setPassword]=useState("")
      const router=useRouter()
  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

     
      const data = await res.json();
      if(data.status === 201){
toast.success(data.message)
router.push("signin")
      }else{
toast.error(data.message);

 
      }

      console.log("RESPONSE:", res);
    } catch (error) {
      console.error("FETCH ERROR:", error);
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

        <button onClick={signupHandler}>ثبت نام</button>
        <div className={styles.link}>
          <Link href="signin">
            <p>حساب کاربری دارید؟ ورود</p>
          </Link>
        </div>
      </form>
      <div className={styles.image}>
        <Image src="/pictures/signup.jpg" width="300" height="150" alt="signup" />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
