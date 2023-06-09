import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Montserrat } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
