import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.hello}>
      Hello World. <Link href="/about">About</Link>
    </div>
  );
}
