import React from 'react';
import Head from 'next/head';
import Contact from '../../components/Contact';

export default function ContactPage({ contact }) {
  return (
    <>
      <Head>
        <title>Contact App</title>
      </Head>

      <main>
        <section>
          <Contact data={contact} />
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http:/localhost:8080/api/v1/contacts');
  const contacts = await res.json();

  const paths = contacts.map((contact) => ({
    params: { id: contact.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http:/localhost:8080/api/v1/contacts/${params.id}`);
  const contact = await res.json();

  return {
    props: { contact },
  };
}
