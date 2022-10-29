import { Tooltip } from '@mui/material';
import Head from 'next/head';
import Home from '../components/Home';

export default function Index({ contacts }) {
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
        <section className='fixed right-4 bottom-4'>
          <Tooltip
            title='Add contact'
            arrow>
            <div className='w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center cursor-pointer p-2 transition duration-500 ease-in-out hover:bg-blue-700 hover:ring hover:outline-2 hover:ring-offset-4'>
              <button className='text-2xl font-bold rounded-full '>
                <span>+</span>
              </button>
            </div>
          </Tooltip>
        </section>
      </main>
    </>
  );
}

export async function loadContacts() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts`);
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

