import Head from "next/head";
import { useState } from "react";
import { HomePage } from "@components/HomePage";
import { AddContactButton } from "@components/AddContactButton";
import { Modal } from "@components/Modal";
import { CloseModal } from "@components/CloseModal";
import { AddContactForm } from "@components/AddContactForm";

export default function Index({ contacts }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name="description"
          content="Nextjs Contact App"
        />
      </Head>

      <HomePage data={contacts} />
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

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`);
    const contacts = await response.json();

    return {
      props: {
        contacts,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
