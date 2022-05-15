import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Layout";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithoutLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithoutLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
