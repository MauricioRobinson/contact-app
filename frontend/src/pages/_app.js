import "../styles/globals.css";
import "animate.css";
import { Layout } from "@/components/Layout";
import { ContactProvider } from "@/context/ContactContext";
import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContactProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContactProvider>
    </AuthProvider>
  );
}

export default MyApp;
