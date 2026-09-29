


import React from 'react'

export default function RadioItem({title , name , data , setData}) {
const {category}= data
     const changeHandler=(e)=>{
 const {name , value}= e.target
 setData({...data , [name]:value})
     }
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        name="category"
        type="radio"
        checked={category === name}
        value={name}
        onChange={changeHandler}
      />
    </div>
  );
}
