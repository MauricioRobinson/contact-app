import Head from "next/head";
import { Hero } from "@components/Hero";
import { Stats } from "@components/Stats";
import { SectionTitle } from "@components/SectionTitle";
import { GetInTouch } from "@components/GetInTouch";
import { TrackContacts } from "@components/TrackContacts";
import { Footprint } from "@components/Footprint";

export default function Index() {
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
        <SectionTitle title="Get in touch with your people" />
        <GetInTouch />
        <SectionTitle title="Keep track of your contacts info" />
        <TrackContacts />
        <SectionTitle title="Build your own contact footprint" />
        <Footprint />
      </main>
    </>
  );
}

