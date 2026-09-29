
"use client";

import React, { useState } from 'react'
import styles from "@/components/templates/Addpage.module.css"
import TextInput from '../modules/TextInput';
import RadioItem from '../modules/RadioItem';
import OptionsItem from '../modules/OptionsItem';
import toast, { Toaster } from 'react-hot-toast';
import CustomDatePicker from '../modules/CustomDatePicker';
export default function Addpage() {
      const [data, setData] = useState({
        title: "",
       
        discriotion:"",
        phone :"",
        price: "",
        category:"villa",
        constractionDate: new Date(),
        rules:[],
        location:"",
        realSatet:"",
        amenities:[],
      });
       const fromHandler= async(e)=>{
  e.preventDefault();
   const res = await fetch("/api/advertising", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   });
   const result=await res.json()
  
   if (result.status == 201) {
     toast.success(result.message);
     
   }
  setData({
    title: "",
    discriotion: "",
    phone: "",
    price: "",
    category: "villa",
    constructionDate: new Date(),
    rules: [],
    location: "",
    realSatet: "",
    amenities: [],
  });
       }
  return (
    <div className={styles.container}>
      <h3> ثبت آگهی </h3>
      <form onSubmit={fromHandler} >
        <div className={styles.fields}>
          <TextInput
            title="  عنوان آگهی "
            setData={setData}
            data={data}
            name="title"
          />
          <TextInput
            title="    توضیحات آگهی "
            setData={setData}
            data={data}
            name="discriotion"
          />
          <TextInput
            title="   شماره تماس "
            setData={setData}
            data={data}
            name="phone"
          />
          <TextInput
            title="  آدرس آگهی "
            setData={setData}
            data={data}
            name="location"
          />
          <TextInput
            title="  قیمت آگهی "
            setData={setData}
            data={data}
            name="price"
          />
          <TextInput
            title="    نام املاک "
            setData={setData}
            data={data}
            name="realSatet"
          />
        </div>
        <h4> دسته بندی </h4>
        <div className={styles.category}>
          <RadioItem
            title="  ویلا "
            data={data}
            setData={setData}
            name="villa"
          />
          <RadioItem
            title="  دفتر "
            data={data}
            setData={setData}
            name="office"
          />
          <RadioItem
            title="  آپارتمان "
            data={data}
            setData={setData}
            name="apartment"
          />
          <RadioItem
            title="   تجاری "
            data={data}
            setData={setData}
            name="store"
          />
        </div>
        <h4> امکانات رفاهی </h4>
        <div className={styles.options}>
          <OptionsItem name="amenities" data={data} setData={setData} />
          <h4> قوانین </h4>
          <OptionsItem name="rules" data={data} setData={setData} />
        </div>
        <CustomDatePicker data={data} setData={setData}/>
        <button type="submit" className={styles.add}>
          ثبت آگهی
        </button>
      </form>
     <Toaster/>
    </div>
  );
}
