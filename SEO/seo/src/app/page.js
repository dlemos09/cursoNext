import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>My Awesome Website</title>
        <meta
          name="Description"
          content="This is my awesome Next.js website for learning"
        />
        <meta name="keywords" content="Next.js, SEO, Web Development, React" />
        <meta name="author" content="Douglas Lemos" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to My Website</h1>
        <p>I am learning Next.js and SEO!</p>
      </main>
    </div>
  );
}
