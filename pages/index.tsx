import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          ipsa? Eligendi corporis sit soluta, ut odit est commodi praesentium
          harum nemo blanditiis, doloremque sequi inventore quasi sunt quas
          quam. Recusandae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          ipsa? Eligendi corporis sit soluta, ut odit est commodi praesentium
          harum nemo blanditiis, doloremque sequi inventore quasi sunt quas
          quam. Recusandae.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
