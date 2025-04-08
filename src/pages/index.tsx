import Head from "next/head";
import { MedievalSharp, Cormorant } from "next/font/google";

import styles from "@/styles/Home.module.css";

import Header from "@/sections/Header";
import Composition from "@/sections/Composition";
import Special from "@/sections/Special";

const medievalSharp = MedievalSharp({
  weight: ['400'],
  variable: "--font-medieval-sharp",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: ['400'],
  variable: "--font-cormorant",
  subsets: ["cyrillic", 'latin'],
});

export default function Home() {
  const pageClassName = `${styles.page} ${medievalSharp.variable} ${cormorant.variable}`
  return (
    <>
      <Head>
        <title>Queen of Cups</title>
        <meta name="description" content="Custom drip coffee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pageClassName}>
        <div className={styles.main}>
          <Header />
          <Composition />
          <Special />
        </div>
      </div>
    </>
  );
}
