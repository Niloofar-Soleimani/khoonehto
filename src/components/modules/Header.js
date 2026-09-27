"use client";
import React, { useState } from "react";
import styles from "@/components/modules/Header.module.css";
import Link from "next/link";
import Image from "next/image";
// import { useSession } from "next-auth/react";
function Header() {
     const [menuOpen,setMenuOpen]=useState(false)
//   const { data } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Image
            src="/pictures/logo.png"
            width={80}
            height={50}
            className={styles.logo}
            alt="logo  خانه تو"
          />
        </div>
        <Link href="/">صفحه اصلی</Link>
        <Link href="/advertising">آگهی ها</Link>
      </div>
      <div className={styles.left}>
        <div className={styles.login}>
          {/* {!data ? (
            <Link href="/signin">ورود</Link>
          ) : (
          <Link href="/account">حساب کاربری</Link>  


          )} */}
          <Link href="/signin">ورود</Link> <span> | </span>
          <Link href="/account">حساب کاربری</Link>
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/">صفحه اصلی</Link>

          <Link href="/advertising">آگهی‌ها</Link>

          <Link href="/signin">ورود</Link>

          <Link href="/account">حساب کاربری</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
