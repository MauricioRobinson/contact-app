import Head from "next/head";
import { HomePage } from "@components/HomePage";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Navbar } from "@components/Navbar";

export default function Home({ contacts }) {
  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name="description"
          content="Nextjs Contact App"
        />
      </Head>

      <Navbar />

      <main>
        <section>
          <HomePage data={contacts} />
        </section>
        <section className="fixed right-4 bottom-4">
          <button className="w-16 h-16 bg-blue-600 flex justify-center items-center cursor-pointer p-2 transition duration-500 ease-in-out hover:bg-blue-700 hover:ring hover:ring-offset-1 hover:ring-offset-blue-600 text-2xl font-bold rounded-full ">
            <span>
              <PlusIcon className="w-8 h-8" />
            </span>
          </button>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`);
    const contacts = await response.json();

    return {
      props: {
        contacts,
      },
      revalidate: 5 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

