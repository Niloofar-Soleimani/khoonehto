
"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  FaRegCircleUser,
  FaHouse,
  FaBuilding,
  FaPlus,
  FaRightFromBracket,
} from "react-icons/fa6";

import styles from "@/components/templates/AccountPage.module.css";

export default function SideBar() {
  const logoutHandler = async () => {
    await signOut({
      callbackUrl: "/signin",
    });
  };

  return (
    <aside className={styles.sidebar}>
      {/* User */}
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <FaRegCircleUser />
        </div>

        <div className={styles.profileInfo}>
          <span>حساب کاربری</span>
          <small>کاربر خانه تو</small>
        </div>
      </div>

      {/* Menu */}
      <nav className={styles.menu}>
        <Link href="/account" className={styles.menuItem}>
          <FaHouse />
          <span>داشبورد</span>
        </Link>

        <Link
          href="/account/my-advertising"
          className={styles.menuItem}
        >
          <FaBuilding />
          <span>آگهی‌های من</span>
        </Link>

        <Link
          href="/account/add"
          className={styles.menuItem}
        >
          <FaPlus />
          <span>ثبت آگهی</span>
        </Link>
      </nav>

      {/* Logout */}
      <button
        className={styles.logout}
        onClick={logoutHandler}
      >
        <FaRightFromBracket />
        <span>خروج از حساب</span>
      </button>
    </aside>
  );
}

