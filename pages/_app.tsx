import { Navbar } from "@/components/Layout";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
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
    <UserProvider supabaseClient={supabaseClient}>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
    </UserProvider>
  );
}

export default MyApp;
