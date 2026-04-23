import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>CHD3 Foundation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CHD3 Foundation supports families living with Snijders Blok-Campeau Syndrome worldwide." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <Main />
      </AppLayout>
    </>
  );
}
