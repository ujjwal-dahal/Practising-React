import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
          Let's dive into <code>Next.js</code>.
          </li>
          <li>Ujjwal Dahal</li>
        </ol>

        
      </main>
     
    </div>
  );
}
