import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import styles from "../app/styles/home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>

      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}

      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>

        {/* <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, similique voluptates. Amet enim, cum molestias magni sequi suscipit at unde. Nemo rem modi repellat id iusto quod quidem ut itaque.</p>
          </a>
        </div> */}

        <h2>Popular Blogs:</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design the logic for the web.</p>
          </div>

          <div className={styles.card}>
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design the logic for the web.</p>
          </div>

          <div className={styles.card}>
            <h3>How to Learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design the logic for the web.</p>
          </div>
        </div>

      </main>
    </div>
  );
}
