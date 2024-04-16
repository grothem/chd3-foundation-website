import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AppLayout } from "@/layout/AppLayout";
import { Main } from "@/components/Main";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CHD3 Foundation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://widgets.givebutter.com/latest.umd.cjs?acct=ruykNMO5qtnfw8Tv&p=other" />
      <AppLayout>
        <Main />
      </AppLayout>
    </>
  );
}
