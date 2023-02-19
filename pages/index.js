import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  return (
    <div>
      <Head>
        <title>You shouldn't be here</title>
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>You shouldn't be here</h3>
      </main>
    </div>
  );
}
