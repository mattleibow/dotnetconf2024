"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Game from "./_components/game";

export default function Home() {
  return (
    <div>
      <div className={styles.hello}>
        Hello World. <Link href="/about">About</Link>
      </div>

      <Game />
    </div>
  );
}
