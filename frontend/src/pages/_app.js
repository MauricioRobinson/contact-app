import "@styles/globals.css";
import "animate.css";
import { Layout } from "@components/Layout";
import { ContactProvider } from "@context/ContactContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContactProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContactProvider>
  );
}

export default MyApp;

