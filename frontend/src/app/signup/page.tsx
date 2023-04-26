import React from "react";
import { SignupForm } from "@/components/SignupForm";

const Page = () => {
  return (
    <section>
      <main className="max-w-screen-xl lg:max-w-screen-2xl px-8 mx-auto">
        <SignupForm />
      </main>
    </section>
  );
};

export default Page;
