import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { ContactPage } from "@components/ContactPage";
import { AddContactButton } from "@components/AddContactButton";
import { Modal } from "@components/Modal";
import { AddContactForm } from "@components/AddContactForm";
import { useContact } from "@hooks/useContact";

export default function Index({ fetchedContacts }) {
  const [modal, setModal] = useState(false);
  const { dispatch } = useContact();

  useEffect(() => {
    dispatch({ type: "SET_CONTACTS", payload: fetchedContacts });
  }, [fetchedContacts, dispatch]);

  const handleModal = useCallback(() => {
    setModal((prevState) => !prevState);
  }, []);

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name="description"
          content="Nextjs Contact App"
        />
      </Head>

      <ContactPage />
      <AddContactButton
        modal={modal}
        setModal={handleModal}
      />

      <Modal mounted={modal}>
        <AddContactForm setModal={handleModal} />
      </Modal>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const accessToken = ctx.req?.cookies["token"];

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
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      fetchedContacts: data,
    },
  };
}
