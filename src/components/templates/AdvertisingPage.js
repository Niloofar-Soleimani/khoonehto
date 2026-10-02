



import styles from "@/components/templates/AdvertisingPage.module.css"
import Card from "@/components/modules/Card";
import Filter from "../modules/Filter";

// export default async function AdvertisingPage() {
//      const res = await fetch("http://localhost:3000/api/advertising" , {next : { revalidate :5 }});
//       const {data}=await res.json()
//        console.log("data" , data);
       
//   return (
//     <div className={styles.container}>
//   سلام از صفحه آگهی
// {data ? data.map((item)=>(
//  <Card   key={item._id.toString()}
//   _id={item._id.toString()}
//   title={item.title}
//   location={item.location}
//   price={item.price} />
// )) : <span className="text-black">  آگهی وجود ندارد </span>}

//     </div>
//   )
// }

export default async function AdvertisingPage({searchParams}) {
    const params = await searchParams;
    console.log("sparams",searchParams);
    
  const res = await fetch("http://localhost:3000/api/advertising", {
    cache: "no-store",
  });


 const { data } = await res.json();
   let finallData = data;
   if (params?.category) {
     finallData = finallData.filter(
       (item) => item.category === params.category
     );
   }

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div> فیلتر بر اساس دسته بندی :</div>
        <Filter />
      </div>
      <div className={styles.card}>
        {finallData.length > 0 ? (
          finallData.map((item) => (
            <Card
              key={item._id.toString()}
              _id={item._id.toString()}
              title={item.title}
              location={item.location}
              price={item.price}
              operation={false}
            />
          ))
        ) : (
          <p>آگهی‌ای برای نمایش وجود ندارد.</p>
        )}
      </div>
    </div>
  );
}