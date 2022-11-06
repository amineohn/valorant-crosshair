import RootLayout from "../layouts";
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }: any) {
  return <RootLayout children={<Component {...pageProps} />} />;
}
