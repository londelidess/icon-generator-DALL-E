import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Header } from "~/component/Header";
import { Footer } from "~/component/Footer";
import { Press_Start_2P } from 'next/font/google';

export const pressStart2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} className={pressStart2P.className}/>
        <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
