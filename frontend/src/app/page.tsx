import { Footprint } from "@/components/Footprint";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Stats from "@/components/Stats";
import { TrackContacts } from "@/components/TrackContacts";
import React from "react";

const Page = () => {
  return (
    <section>
      <Hero />
      <main className="max-w-screen-xl lg:max-w-screen-2xl px-8 mx-auto">
        <Stats />
        <SectionTitle title="Get in touch with your people" />
        <GetInTouch />
        <SectionTitle title="Keep track of your contacts info" />
        <TrackContacts />
        <SectionTitle title="Build your own contact footprint" />
        <Footprint />
      </main>
    </section>
  );
};

export default Page;
