import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";
import { FirebaseAppProvider } from "reactfire";
import "firebase/firestore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
