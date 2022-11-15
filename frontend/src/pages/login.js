import Head from "next/head";
import { LoginForm } from "@components/LoginForm";

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
        <LoginForm />
      </main>
    </>
  );
}
