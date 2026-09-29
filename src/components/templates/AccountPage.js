"use client"

import styles from "@/components/templates/AccountPage.module.css"
import React from 'react'
import SideBar from "../modules/SideBar";

export default function AccountPage({children}) {
  return <div className={styles.container}>
  <SideBar/>
  <div className={styles.main}>{children}</div>
  </div>;
}
