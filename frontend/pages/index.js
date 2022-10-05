import Head from 'next/head';
import Image from 'next/image';
import Home from '../components/Home';
import styles from '../styles/Home.module.css';

export default function App() {
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
          <Home />
        </section>
      </main>
    </>
  );
}

