"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "@/components/templates/MainePage.module.css";
import "swiper/css";

export default function MainPage() {
     const cities =[ "  تهران", " مشهد " , "  اهواز "  , " اصفهان "  , " سمنان "  , " بوشهر" ]
  return (
    <div className={styles.container}>
      <h1>خرید و فروش و معامله ملک</h1>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/28430ddb9db4bf01df1c9a5b9dbdff7b.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/8903697bfb2463557ab508e87c234825.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/c695b0d4e0a79b8b7bb9a93497f77ed7.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/e1f0b59b657ef41267db24bc24763171.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/1C5A0897-scaled.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/Interior-Design-of-a-Modern-House-4.webp"
              width={300}
              height={300}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1>شهرهای پر بازدید</h1>
      <div className={styles.cities}>
        {cities.map((item) => (
          <div className={styles.city} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
