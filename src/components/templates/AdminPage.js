
"use client"

import styles from '@/components/templates/Admin.module.css'
import Card from '../modules/Card';
import { Toaster } from 'react-hot-toast';

export default function AdminPage({advertisingData}) {
   console.log(advertisingData);
   
  return (
    <div className={styles.container}>
      {!advertisingData ? (
        <span> آگهی در انتظار تاییدی وجود ندارد </span>
      ) : (
        advertisingData.map((item) => (
          <Card
            key={item._id}
            _id={item._id}
            title={item.title}
            location={item.location}
            price={item.price}
            operation={false} role={"ADMIN"}
          />
        ))
      )}
      <Toaster/>
    </div>
  );
}
