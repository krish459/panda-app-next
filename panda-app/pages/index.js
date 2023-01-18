import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 35px;
          }
          h3 {
            font-size: 25px;
          }
        `}
      </style>
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <div className={styles.imagewrap}>
          <Image
            className={styles.myImg}
            src="/images/bgpic"
            width={237}
            height={158}
            alt="hunting coder"
          />
        </div>
        <div>
          <p className={styles.description}>By coder</p>
          <div className={styles.blog}>
            <h2>Popular Blogs</h2>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language used to design logic for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language used to design logic for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language used to design logic for the web</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
