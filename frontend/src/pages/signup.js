import Head from "next/head";
import { SignupForm } from "@/components/SignupForm";

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

      <main>
        <SignupForm />
      </main>
    </>
  );
}
