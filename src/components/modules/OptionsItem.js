
 import styles from "@/components/templates/Addpage.module.css"
import React from 'react'

export default function OptionsItem({name , data , setData }) {
    console.log("data:::",data);
    
     const changeHandler=(e , index)=>{
const {value}=e.target;
const advertisingOption=[...data[name]];
advertisingOption[index]=value;
setData({...data,[name]:advertisingOption})
     }
          const deleteHandler = (e, index) => {
const advertisingOption = [...data[name]];
advertisingOption.splice(index , 1)
setData({ ...data, [name]: advertisingOption });
          };
               const addHandler = () => {
setData({...data,[name]:[...data[name],""]})

               };
  return (
    <>
      {data[name].map((item, index) => (
        <div key={index}>
          <input className="text-black"
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <div
            className={styles.deleteBtn}
            onClick={(e) => deleteHandler(e, index)}
          >
            حذف
          </div>
        </div>
      ))}
      <div className={styles.addOptionBtn} onClick={addHandler}>
        افزودن
      </div>
    </>
  );
}
