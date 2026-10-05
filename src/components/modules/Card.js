'use client';
import styles from "@/components/modules/Card.module.css"
import { sp } from "@/utils/opration/Number";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import React from 'react'

export default function Card({ _id, title, location, price, operation = true ,role="USER" }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/advertising/${_id}`, {
      method: "DELETE",
    });

    console.log("response", res);
    console.log(res.status);

    if (res.status == 200) {
      toast.success("  اگهی با موفقیت حذف شد ");

      router.refresh();
    }
  };
  const publishHandler =async () => {
const res = await fetch(`/api/admin/${_id}`, {
  method: "PATCH",
});

console.log("response", res);
console.log(res.status);

if (res.status == 200) {
  toast.success("  اگهی منتشر شد ");

  router.refresh();
}


  };

  return (
    <div className={styles.container}>
      <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{sp(price)} تومان</p>
      </div>

      {role === "USER" ? (
        operation ? (
          <div className={styles.btn}>
            <Link href={`/advertising/${_id}`}>
              <div>
                <FaEye />
              </div>
            </Link>

            <Link href={`/account/edit/${_id}`}>
              <div>
                <MdEdit />
              </div>
            </Link>

            <div onClick={deleteHandler}>
              <MdDelete />
            </div>
          </div>
        ) : (
          <Link href={`/advertising/${_id}`}>
            <div className={styles.details}> جزییات آگهی </div>
          </Link>
        )
      ) : (
        <div className={styles.admin}>
          <Link href={`/advertising/${_id}`}>
            <div>مشاهده آگهی</div>
          </Link>

          <div onClick={publishHandler}>انتشار آگهی</div>
          <div onClick={deleteHandler}>حذف آگهی</div>
        </div>
      )}
      {/* <Toaster/> */}
    </div>
  );
}
