import { AppProps } from "next/app";
import RootLayout from "../layouts";
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <RootLayout children={<Component {...pageProps} />} />;
}
