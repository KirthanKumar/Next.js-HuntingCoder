import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import styles from "../app/styles/home.module.css"
import styles1 from "../app/styles/Home1.module.css"
import styles2 from "../app/styles/Home2.module.css"

export default function Home() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>


      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}

      <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          {/*Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>. */}
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
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

        <div className={`${styles1.con} ${styles2.con}`}>
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
