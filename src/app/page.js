import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>This is Exercise 1.6</h1>
        <ol>
          <li>Static website.</li>
          <li>Deploy.</li>
        </ol>
      </main>
    </div>
  );
}
