"use client";
import styels from "@/components/templates/AdvertisingPage.module.css"
import { useRouter } from "next/navigation";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
export default function Filter() {
 const [query , setQuery]=useState({category : ""})
  const router = useRouter()

    const changeHandler =(e)=>{
setQuery({...query , category : e.target.value})
    }
  return (
    <div className={styels.options}>
      <select onChange={changeHandler}>
        <option value=""> همه </option>
        <option value="villa"> ویلا </option>
        <option value="apartment"> آپارتمان </option>
        <option value="office"> دفتر </option>
        <option value="store"> فروشگاه </option>
      </select>
      <div onClick={() => router.push(`/advertising?category=${query.category}`)} className="flex items-center gap-3">
        <IoSearch  size={24}/>
        جستجو
      </div>
    </div>
  );
}
