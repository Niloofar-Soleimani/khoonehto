"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "@/components/templates/MainePage.module.css";
import { PiBuildingApartment, PiBuildingOfficeDuotone } from "react-icons/pi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStorefrontOutline } from "react-icons/io5";
import { EffectCoverflow, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const categories = [
  {
    title: "آپارتمان",
    description: "خانه‌ای مناسب برای زندگی شهری",
    icon: <PiBuildingApartment />,
    value: "apartment",
  },
  {
    title: "ویلا",
    description: "فضایی متفاوت برای زندگی",
    icon: <MdOutlineOtherHouses />,
    value: "villa",
  },
  {
    title: "اداری",
    description: "فضای مناسب برای کسب‌وکار",
    icon: <PiBuildingOfficeDuotone />,
    value: "office",
  },
  {
    title: "تجاری",
    description: "مکان مناسب برای توسعه کسب‌وکار",
    icon: <IoStorefrontOutline />,
    value: "store",
  },
];

const properties = [
  {
    image: "/pictures/28430ddb9db4bf01df1c9a5b9dbdff7b.jpg",
    category: "آپارتمان",
    title: "آپارتمان مدرن",
    location: "تهران",
    price: "۸.۵ میلیارد تومان",
  },
  {
    image: "/pictures/8903697bfb2463557ab508e87c234825.jpg",
    category: "ویلا",
    title: "ویلای مدرن",
    location: "شمال",
    price: "۱۲ میلیارد تومان",
  },
  {
    image: "/pictures/c695b0d4e0a79b8b7bb9a93497f77ed7.jpg",
    category: "اداری",
    title: "دفتر اداری",
    location: "تهران",
    price: "۵ میلیارد تومان",
  },
  {
    image: "/pictures/e1f0b59b657ef41267db24bc24763171.jpg",
    category: "ویلا",
    title: "ویلا ",
    location: "نوشهر",
    price: "10 میلیارد تومان",
  },
  {
    image: "/pictures/Interior-Design-of-a-Modern-House-4.webp",
    category: "آپارتمان",
    title: "آپارتمان ",
    location: "تهران",
    price: "20 میلیارد تومان",
  },
];

const cities = [
  "تهران",
  "مشهد",
  "اهواز",
  "اصفهان",
  "سمنان",
  "بوشهر",
];

export default function MainPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const elements = pageRef.current?.querySelectorAll(
      `.${styles.reveal}`
    );

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main ref={pageRef} className={styles.page}>
      {/* <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroContent}>
          <div className={`${styles.heroBadge} ${styles.reveal}`}>
            <span></span>
            پلتفرم هوشمند املاک
          </div>

          <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
            خانه‌ای که
            <br />
            <strong>دنبالش هستی</strong>
            <br />
            اینجاست.
          </h1>

          <p className={`${styles.heroDescription} ${styles.reveal}`}>
            خرید، فروش، رهن و اجاره ملک را ساده‌تر از همیشه تجربه کنید. خانه
            مناسب شما فقط چند قدم با شما فاصله دارد.
          </p>

          <div className={`${styles.searchBox} ${styles.reveal}`}>
            <div className={styles.searchInput}>
              <span className={styles.searchIcon}>⌕</span>

              <input type="text" placeholder="مثلاً آپارتمان در تهران..." />
            </div>

            <Link href="/advertising" className={styles.searchButton}>
              جستجوی ملک
            </Link>
          </div>

          <div className={`${styles.heroStats} ${styles.reveal}`}>
            <div>
              <strong>+۱۲۰۰</strong>
              <span>آگهی فعال</span>
            </div>

            <div>
              <strong>+۵۰۰</strong>
              <span>ملک ثبت شده</span>
            </div>

            <div>
              <strong>+۲۰</strong>
              <span>شهر</span>
            </div>
          </div>
        </div>

        <div className={`${styles.scene} ${styles.reveal}`}>
          <div className={styles.sceneGlow}></div>

          <div className={`${styles.orbit} ${styles.orbitOne}`}></div>

          <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>

          <div className={`${styles.orbit} ${styles.orbitThree}`}></div>

          <div className={styles.house3d}>
            <div className={styles.houseRoof}></div>

            <div className={styles.houseBody}>
              <div className={`${styles.window} ${styles.windowOne}`}>
                <span></span>
                <span></span>
              </div>

              <div className={`${styles.window} ${styles.windowTwo}`}>
                <span></span>
                <span></span>
              </div>

              <div className={styles.door}>
                <div className={styles.doorHandle}></div>
              </div>

              <div className={styles.garage}></div>
            </div>

            <div className={styles.houseSide}></div>

            <div className={styles.houseGround}>
              <div className={styles.garden}></div>
              <div className={styles.path}></div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTop}`}>
            <span className={styles.cardIcon}>⌂</span>

            <div>
              <small>ملک‌های جدید</small>
              <strong>+۲۴ ملک</strong>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.locationIcon}>●</span>

            <div>
              <small>محبوب‌ترین منطقه</small>
              <strong>تهران</strong>
            </div>
          </div>

          <div className={styles.houseShadow}></div>
        </div>

        <div className={styles.scrollHint}>
          <span></span>
          <small>برای کشف بیشتر اسکرول کنید</small>
        </div>
      </section> */}
      <section className={styles.heroVideo}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroBadge} ${styles.reveal}`}>
            <span></span>
            پلتفرم هوشمند املاک
          </div>

          <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
            خانه‌ای که
            <br />
            <strong>دنبالش هستی</strong>
            <br />
            اینجاست.
          </h1>

          <p className={`${styles.heroDescription} ${styles.reveal}`}>
            خرید، فروش، رهن و اجاره ملک را ساده‌تر از همیشه تجربه کنید. خانه
            مناسب شما فقط چند قدم با شما فاصله دارد.
          </p>
        </div>
        <video
          className={styles.heroVideoElement}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/video/heroPage - herminal.com compressed.webm"
            type="video/webm"
          />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>

        <div className={styles.heroVideoOverlay}></div>
      </section>
      <section className={styles.categoriesSection}>
        <div className={`${styles.sectionHeading} ${styles.reveal}`}>
          <span>دسته‌بندی املاک</span>

          <h2>
            فضای مناسب
            <br />
            <strong>برای هر سبک زندگی</strong>
          </h2>

          <p>
            فرقی نمی‌کند دنبال خانه، ویلا، دفتر یا فضای تجاری باشید؛ خانه تو
            انتخاب‌های مختلفی برای شما فراهم کرده است.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <Link
              key={category.value}
              href={`/advertising?category=${category.value}`}
              className={`${styles.categoryCard} ${styles.reveal}`}
            >
              <div className={styles.categoryNumber}>0{index + 1}</div>

              <div className={styles.categoryIcon}>{category.icon}</div>

              <div className={styles.categoryContent}>
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <span className={styles.categoryArrow}>←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={`${styles.sectionHeading} ${styles.reveal}`}>
          <span>انتخاب‌های ویژه</span>

          <h2>
            ملک‌هایی که
            <br />
            <strong>ارزش دیدن دارند</strong>
          </h2>
        </div>

        <div className={`${styles.propertySwiper} ${styles.reveal}`}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 180,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.propertiesSwiper}
          >
            {properties.map((property, index) => (
              <SwiperSlide
                key={`${property.title}-${index}`}
                className={styles.propertySlide}
              >
                <Link href="/advertising" className={styles.propertyCard}>
                  <div className={styles.propertyImage}>
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 640px) 85vw, 360px"
                    />

                    <div className={styles.propertyOverlay}>
                      <span>{property.category}</span>

                      <span className={styles.propertyNumber}>
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className={styles.propertyInfo}>
                    <div>
                      <h3>{property.title}</h3>

                      <p>
                        <span>●</span>
                        {property.location}
                      </p>
                    </div>

                    <strong>{property.price}</strong>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.moreProperties} ${styles.reveal}`}>
          <Link href="/advertising">
            مشاهده همه آگهی‌ها
            <span>←</span>
          </Link>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyBackground}></div>

        <div className={`${styles.storyContent} ${styles.reveal}`}>
          <span>خانه فقط یک ساختمان نیست</span>

          <h2>
            جایی برای
            <br />
            <strong>ساختن زندگی</strong>
          </h2>

          <p>
            ما در خانه تو تلاش می‌کنیم فرآیند پیدا کردن ملک مناسب را از یک
            جستجوی خسته‌کننده به یک تجربه ساده، سریع و لذت‌بخش تبدیل کنیم.
          </p>

          <Link href="/aboutUs" className={styles.storyButton}>
            بیشتر درباره خانه تو
            <span>←</span>
          </Link>
        </div>

        {/* <div className={`${styles.storyVisual} ${styles.reveal}`}>
          <div
            className={`${styles.storyCircle}  ${styles.storyCircleOne}`}
          ></div>
          <div
            className={`${styles.storyCircle} ${styles.storyCircleTwo}`}
          ></div>
          <div
            className={`${styles.storyCircle} ${styles.storyCircleThree}`}
          ></div>

          <div className={styles.storyCenter}>
            <span>خانه</span>
            <strong>تو</strong>
          </div>
        </div> */}
        <div className={`${styles.scene} ${styles.reveal}`}>
          <div className={styles.sceneGlow}></div>

          <div className={`${styles.orbit} ${styles.orbitOne}`}></div>

          <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>

          <div className={`${styles.orbit} ${styles.orbitThree}`}></div>

          <div className={styles.house3d}>
            <div className={styles.houseRoof}></div>

            <div className={styles.houseBody}>
              <div className={`${styles.window} ${styles.windowOne}`}>
                <span></span>
                <span></span>
              </div>

              <div className={`${styles.window} ${styles.windowTwo}`}>
                <span></span>
                <span></span>
              </div>

              <div className={styles.door}>
                <div className={styles.doorHandle}></div>
              </div>

              <div className={styles.garage}></div>
            </div>

            <div className={styles.houseSide}></div>

            <div className={styles.houseGround}>
              <div className={styles.garden}></div>
              <div className={styles.path}></div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTop}`}>
            <span className={styles.cardIcon}>⌂</span>

            <div>
              <small>ملک‌های جدید</small>
              <strong>+۲۴ ملک</strong>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.locationIcon}>●</span>

            <div>
              <small>محبوب‌ترین منطقه</small>
              <strong>تهران</strong>
            </div>
          </div>

          <div className={styles.houseShadow}></div>
        </div>
      </section>

      <section className={styles.citiesSection}>
        <div className={`${styles.sectionHeading} ${styles.reveal}`}>
          <span>شهرهای پر بازدید</span>

          <h2>
            از هر جای ایران،
            <br />
            <strong>خانه خودت را پیدا کن</strong>
          </h2>
        </div>

        <div className={styles.cityGrid}>
          {cities.map((city, index) => (
            <Link
              key={city}
              href={`/advertising?location=${encodeURIComponent(city)}`}
              className={`${styles.city} ${styles.reveal}`}
            >
              <span className={styles.cityNumber}>0{index + 1}</span>

              <strong>{city}</strong>

              <span className={styles.cityArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.cta} ${styles.reveal}`}>
        <div className={styles.ctaGlow}></div>

        <div className={styles.ctaContent}>
          <span>ملک خودت را داری؟</span>

          <h2>
            همین امروز
            <br />
            <strong>آگهی کن.</strong>
          </h2>

          <p>
            ملک خود را در خانه تو ثبت کنید و آن را به هزاران جستجوگر ملک معرفی
            کنید.
          </p>

          <Link href="/advertising/create" className={styles.ctaButton}>
            ثبت آگهی جدید
            <span>←</span>
          </Link>
        </div>

        <div className={styles.ctaShape}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
}