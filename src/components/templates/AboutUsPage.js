import Link from "next/link";
import styles from "./AboutUsPage.module.css";



export default function AboutUsPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>درباره خانه تو</span>

          <h1>
            خانه‌ای که دنبالش هستی،
            <br />
            شاید همین‌جا باشد.
          </h1>

          <p>
            خانه تو یک پلتفرم آنلاین برای جستجو، مشاهده و ثبت آگهی‌های ملکی است؛
            جایی که خرید، فروش، رهن و اجاره ملک ساده‌تر و سریع‌تر انجام می‌شود.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/advertising" className={styles.primaryButton}>
              مشاهده آگهی‌ها
            </Link>

            <Link href="/account/add" className={styles.secondaryButton}>
              ثبت آگهی
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.sectionTitle}>
          <span>خانه تو چیست؟</span>
          <h2>یک تجربه ساده‌تر برای پیدا کردن ملک</h2>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              خانه تو با هدف ایجاد یک تجربه ساده، سریع و قابل اعتماد برای جستجوی
              ملک طراحی شده است.
            </p>

            <p>
              در این پلتفرم کاربران می‌توانند آگهی‌های مختلف ملکی را مشاهده کنند
              و بر اساس نوع ملک، موقعیت و اطلاعات آگهی، گزینه مناسب خود را پیدا
              کنند.
            </p>

            <p>
              از آپارتمان و ویلا گرفته تا ملک‌های اداری و تجاری، خانه تو تلاش
              می‌کند تمام نیازهای کاربران در حوزه املاک را در یک محیط ساده و
              کاربردی فراهم کند.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <div>
              <strong>۴</strong>
              <span>دسته‌بندی اصلی ملک</span>
            </div>

            <div>
              <strong>۱</strong>
              <span>پلتفرم برای جستجوی ملک</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>فرصت برای پیدا کردن خانه مناسب</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.sectionTitle}>
          <span>دسته‌بندی املاک</span>
          <h2>ملک موردنظرت را راحت‌تر پیدا کن</h2>
        </div>

        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <span className={styles.icon}>🏠</span>
            <h3>آپارتمان</h3>
            <p>
              جستجو و مشاهده آگهی‌های آپارتمان برای خرید، فروش، رهن و اجاره.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.icon}>🏡</span>
            <h3>ویلا</h3>
            <p>
              مجموعه‌ای از آگهی‌های ویلا برای افرادی که به دنبال یک فضای متفاوت
              هستند.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.icon}>🏢</span>
            <h3>اداری</h3>
            <p>
              آگهی‌های ملک اداری مناسب برای کسب‌وکارها، شرکت‌ها و دفاتر حرفه‌ای.
            </p>
          </div>

          <div className={styles.categoryCard}>
            <span className={styles.icon}>🏬</span>
            <h3>تجاری</h3>
            <p>پیدا کردن ملک تجاری مناسب برای راه‌اندازی یا توسعه کسب‌وکار.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.sectionTitle}>
          <span>چرا خانه تو؟</span>
          <h2>همه‌چیز برای یک جستجوی بهتر</h2>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <div className={styles.featureNumber}>01</div>
            <div>
              <h3>جستجوی ساده</h3>
              <p>بدون پیچیدگی، آگهی‌های موردنظرت را پیدا و بررسی کن.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureNumber}>02</div>
            <div>
              <h3>دسته‌بندی مشخص</h3>
              <p>
                املاک بر اساس نوع ملک دسته‌بندی شده‌اند تا انتخاب سریع‌تر انجام
                شود.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureNumber}>03</div>
            <div>
              <h3>ثبت آگهی</h3>
              <p>
                صاحبان ملک می‌توانند فایل‌های خود را در پلتفرم ثبت و معرفی کنند.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureNumber}>04</div>
            <div>
              <h3>مدیریت آگهی‌ها</h3>
              <p>
                آگهی‌ها قبل از انتشار بررسی و توسط سیستم مدیریت پلتفرم کنترل
                می‌شوند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.sectionTitle}>
          <span>چطور کار می‌کند؟</span>
          <h2>از جستجو تا پیدا کردن ملک مناسب</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <span>۱</span>
            <h3>جستجو کن</h3>
            <p>وارد بخش آگهی‌ها شو و ملک موردنظرت را پیدا کن.</p>
          </div>

          <div className={styles.step}>
            <span>۲</span>
            <h3>بررسی کن</h3>
            <p>اطلاعات، قیمت، موقعیت و امکانات ملک را بررسی کن.</p>
          </div>

          <div className={styles.step}>
            <span>۳</span>
            <h3>انتخاب کن</h3>
            <p>
              آگهی مناسب خودت را انتخاب و برای ارتباط با آگهی‌دهنده اقدام کن.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <span>خانه تو</span>
          <h2>خانه بعدی‌ات را پیدا کن.</h2>
          <p>شاید چیزی که دنبالش هستی، فقط چند کلیک با تو فاصله داشته باشد.</p>
        </div>

        <Link href="/advertising" className={styles.ctaButton}>
          مشاهده آگهی‌ها
        </Link>
      </section>
    </main>
  );
}
