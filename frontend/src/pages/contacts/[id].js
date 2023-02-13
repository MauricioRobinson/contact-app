import React from "react";
import Head from "next/head";
import Contact from "@components/Contact";
import { useRouter } from "next/router";
import { SkeletonCard } from "@components/SkeletonCard";

/* FIXME: 
Debo pasar correctamente el token al header. Pero antes debo resover el error 
que lanza el compilador al acceder a getStaticPaths
*/

export const getStaticPaths = async (ctx) => {
  const accessToken = ctx.req?.cookies["token"];

  console.log("Access token: ", accessToken);

  if (!accessToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
  });
  const contacts = await response.json();

  const paths = contacts?.map((contact) => ({
    params: {
      id: contact._id,
    },
  }));

  console.log("Paths: ", paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, ctx }) => {
  console.log("Params: ", params);
  //   const accessToken = ctx.req?.cookies["token"];

  //   if (!accessToken) {
  //     return {
  //       redirect: {
  //         destination: "/login",
  //         permanent: false,
  //       },
  //     };
  //   }
  //   const id = params?.id;

  //   if (!id) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts/${id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   const contact = await res.json();

  //   return {
  //     props: { contact },
  //     revalidate: 5 * 60,
  //   };
};

export default function ContactPage({ contact }) {
  console.log("Contact info", contact);
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

      <main>{/* <Contact data={contact} /> */}</main>
    </>
  );
}
