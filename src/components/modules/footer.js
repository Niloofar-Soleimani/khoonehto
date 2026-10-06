import { FaPhone } from "react-icons/fa";
// import { ImNewspaper } from "react-icons/im";
import styles from "@/components/modules/footer.module.css";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <ul>
          <li>
            <Link href="/advertising">
              {/* <ImNewspaper /> */}
               اگهی ها
            </Link>
          </li>
          <li>
            <Link href="/account/add">ثبت آگهی</Link>
          </li>
          <li>
            <Link href="/aboutUs">معرفی ما</Link>
          </li>
        </ul>
      </div>
      <div className={styles.left}>
        <p className="flex items-center gap-3">
          <ImLocation2 />
          آدرس : پاسدارن گل نبی ناطق نوری پلاک 17
        </p>
        <p className="flex items-center gap-3">
          <FaPhone />
          تلفن تماس : 021 - 22524782
        </p>
      </div>
    </div>
  );
}

export default Footer;
