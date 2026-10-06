"use client";
import React, { useState } from "react";
import styles from "@/components/modules/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { TiArrowSortedDown } from "react-icons/ti";

function Header() {
   const [advertisingOpen , setAdvertisingOpen]=useState(false)
     const [menuOpen,setMenuOpen]=useState(false)
 const {data}=useSession()

 
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Image
            src="/pictures/logo-removebg-preview.png"
            width={200}
            height={100}
            className={styles.logo}
            alt="logo  خانه تو"
          />
        </div>
        <Link href="/" className={styles.advertisingLink}>
          صفحه اصلی
        </Link>

        <div className={styles.advertising} onMouseEnter={()=>setAdvertisingOpen(true)} onMouseLeave={()=>setAdvertisingOpen(false)}>
          <Link href="/advertising" className={styles.advertisingLink}>
            آگهی‌ها
            <span className={styles.arrow}>
              <TiArrowSortedDown />
            </span>
          </Link>
          {advertisingOpen && (
            <nav className={styles.dropdown}>
              <Link href="/advertising?category=villa">ویلا</Link>

              <Link href="/advertising?category=apartment">آپارتمان</Link>

              <Link href="/advertising?category=office">اداری</Link>

              <Link href="/advertising?category=store">تجاری</Link>
            </nav>
          )}
        </div>

        <Link href="/aboutUs"> درباره ما </Link>
      </div>
      <div className={styles.left}>
        <div className={styles.login}>
          {!data ? (
            <Link href="/signin"> ورود</Link>
          ) : (
            <Link href="/account"> حساب کاربری شما </Link>
          )}
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
