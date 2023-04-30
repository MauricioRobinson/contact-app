import { AddContactButton } from "@/components/AddContactButton";
import Contacts from "@/components/Contacts";
import SearchBar from "@/components/SearchBar";
import React from "react";

interface Cookie {
  name: string;
  value: string;
}

const Page = () => {
  return (
    <section className="relative h-full">
      <AddContactButton />
      <section className="flex items-center justify-between px-8 mt-10">
        <SearchBar />
      </section>
      <main className="max-w-screen-xl lg:max-w-screen-2xl mx-auto">
        <Contacts />
      </main>
    </section>
  );
};

export default Page;
