
"use client";

import React, { useEffect, useState } from 'react'
import styles from "@/components/templates/Addpage.module.css"
import TextInput from '../modules/TextInput';
import RadioItem from '../modules/RadioItem';
import OptionsItem from '../modules/OptionsItem';
import toast, { Toaster } from 'react-hot-toast';
import CustomDatePicker from '../modules/CustomDatePicker';
import { useRouter } from 'next/navigation';
export default function Addpage({advertisingData}) {
const router =useRouter()
    
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
  const result = await res.json();

   console.log("res",res);
   console.log("result",result);
   
   if (res.ok) {
     toast.success(result.message || "آگهی با موفقیت ثبت شد");
     //  router.push("/account/my-advertising")
     //  router.refresh()
   }
  setData({
    title: "",
    discriotion: "",
    phone: "",
    price: "",
    category: "villa",
    constractionDate: new Date(),
    rules: [],
    location: "",
    realSatet: "",
    amenities: [],
  });
       }
 useEffect(() => {
   if (advertisingData) {
     setData({
       title: advertisingData.title || "",
       discriotion: advertisingData.discriotion || "",
       phone: advertisingData.phone || "",
       price: advertisingData.price || "",
       category: advertisingData.category || "villa",
       constractionDate: advertisingData.constractionDate
         ? new Date(advertisingData.constractionDate)
         : new Date(),
       rules: advertisingData.rules || [],
       location: advertisingData.location || "",
       realSatet: advertisingData.realSatet || "",
       amenities: advertisingData.amenities || [],
     });
   }
 }, [advertisingData]);

       const EditHandler= async(e)=>{
            e.preventDefault();
             const payload ={...data , _id : advertisingData?._id}
              console.log("payload",payload);
              
  const res = await fetch("/api/advertising", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
 
   if (res.status == 200) {
     toast.success( "  اگهی با موفقیت ویرایش شد " );
       router.push("/account/my-advertising");
       router.refresh();
   }
       }
  return (
    <div className={styles.container}>
      {advertisingData ? <h3> ویرایش آگهی </h3> : <h3> ثبت آگهی </h3>}

      <form onSubmit={advertisingData ? EditHandler :fromHandler}>
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
        <CustomDatePicker data={data} setData={setData} />
        {advertisingData ? (
          <button type="submit" className={styles.add}>
            ویرایش آگهی
          </button>
        ) : (
          <button type="submit" className={styles.add}>
            ثبت آگهی
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
}
