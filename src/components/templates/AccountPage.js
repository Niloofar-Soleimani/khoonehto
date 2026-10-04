"use client"

import styles from "@/components/templates/AccountPage.module.css"
import React from 'react'
import SideBar from "../modules/SideBar";

export default function AccountPage({children ,role}) {
  return <div className={styles.container}>
  <SideBar role={role} />
  <div className={styles.main}>{children}</div>
  </div>;
}
