import React from "react";
import { Contacts } from "@/components/Contacts";

const ContactPage = () => {
  return (
    <section className="">
      <h1 className="text-center text-2xl font-semibold mt-20">
        Nextjs Contact App{" "}
      </h1>
      <Contacts />
    </section>
  );
};

export { ContactPage };
