import Image from "next/image";
import { MdSearch, MdDensityMedium } from "react-icons/md";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Image src="/logo.png" alt="Travelo logo" width={200} height={0} />
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
          <li className={styles.search}>
            <MdSearch size={"24px"} />
          </li>
          <li className={styles.bar}>
            <MdDensityMedium size={"20px"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
