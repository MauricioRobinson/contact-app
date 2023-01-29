import Head from "next/head";
import { useEffect, useState } from "react";
import { ContactPage } from "@components/ContactPage";
import { AddContactButton } from "@components/AddContactButton";
import { Modal } from "@components/Modal";
import { CloseModal } from "@components/CloseModal";
import { AddContactForm } from "@components/AddContactForm";
import { useContact } from "@hooks/useContact";

export default function Index({ fetchedContacts }) {
  const [modal, setModal] = useState(false);

  const { contacts, dispatch } = useContact();

  useEffect(() => {
    dispatch({ type: "SET_CONTACTS", payload: fetchedContacts });
  }, [fetchedContacts, dispatch]);

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
        setModal={setModal}
      />

      <Modal mounted={modal}>
        <CloseModal setModal={setModal} />
        <AddContactForm />
      </Modal>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`);
  const data = await response.json();

  return {
    props: {
      fetchedContacts: data,
    },
  };
}
