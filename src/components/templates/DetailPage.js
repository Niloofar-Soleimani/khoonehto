


import styles from '@/components/templates/Details.module.css'
import { sp } from '@/utils/opration/Number';

export default function DetailPage({advertisingData}) {
const categories ={
    villa : " ویلا" ,
    apartment : "آپارتمان ", 
    store:" فروشگاه ",
    office : " دفتر"
}
const {  title,
    discriotion,
    phone,
    price,
    constractionDate,
    category,
    amenities,
    rules,
    location,
    realSatet ,createdAt} =advertisingData

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <h3>عنوان آگهی</h3>
          <span>{title}</span>
        </div>
        <div>
          <h3>توضیحات آگهی</h3>
          <span>{discriotion}</span>
        </div>

        <div>
          <h3>قیمت ملک</h3>
          <span>{sp(price)}تومان</span>
        </div>

        <div>
          <h3>آدرس</h3>
          <span>{location}</span>
        </div>

        <div>
          <h3>دسته بندی</h3>
          <span>{categories[category]}</span>
        </div>

        <div>
          <h3>امکانات رفاهی</h3>
          {amenities.length ? (
            amenities.map((item) => <span key={item}>{item}</span>)
          ) : (
            <span>امکانات رفاهی درج نشده است</span>
          )}
        </div>
        <div>
          <h3>قوانین</h3>
          {rules.length ? (
            rules.map((item) => <span key={item}>{item}</span>)
          ) : (
            <span>قوانین درج نشده است</span>
          )}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div>
          <span>نام املاک:</span>
          <span>{realSatet}</span>
        </div>
        <div>
          <span> شماره تماس:</span>
          <span>{phone}</span>
        </div>
        <div>
          <span>سال ساخت :</span>
          <span>
            {new Date(constractionDate)
              .toLocaleDateString("fa-IR")
              .split("/", 1)}
          </span>
        </div>
        <div>
          <span>تاریخ ثبت آگهی:</span>
          <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
      </div>
    </div>
  );
}
