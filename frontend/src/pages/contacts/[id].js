import React from "react";
import Head from "next/head";
import Contact from "@components/Contact";
import { useRouter } from "next/router";
import { SkeletonCard } from "@components/SkeletonCard";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`);
  const contacts = await res.json();

  const paths = contacts?.map((contact) => ({
    params: {
      id: contact.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts/${id}`);
    const contact = await res.json();

    return {
      props: { contact },
      revalidate: 5 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function ContactPage({ contact }) {
  const router = useRouter();
  if (router.isFallback) {
    return <SkeletonCard />;
  }

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

      <main>
        <Contact data={contact} />
      </main>
    </>
  );
}
