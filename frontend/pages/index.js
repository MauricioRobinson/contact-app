import Head from 'next/head';
import Home from '../components/Home';

export default function App({ contacts }) {
  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta
          name='description'
          content='Nextjs Contact App'
        />
      </Head>

      <main>
        <section>
          <Home data={contacts} />
        </section>
      </main>
    </>
  );
}

export async function loadContacts() {
  const getData = await fetch('http:/localhost:8080/api/v1/contacts');
  const contacts = await getData.json();

  return contacts;
}

export async function getStaticProps() {
  const contacts = await loadContacts();

  return {
    props: {
      contacts,
    },
  };
}

