import Head from "next/head";
import { Hero } from "@components/Hero";
import { Stats } from "@components/Stats";

export default function Index({ contacts }) {
  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name="description"
          content="Nextjs Contact App"
        />
      </Head>

      <main className="">
        <Hero />
        <Stats />
      </main>
    </>
  );
}

