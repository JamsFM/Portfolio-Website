import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head'
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
// import Favicon from "react-favicon";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Personal Portfolio as a Software Development Engineer",
  icons: {
    icon: "/favicon.ico",
    // icon: "/public/favicon/favicon.svg",
    // icon: "/_next/static/media/metadata/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  RootLayout.propTypes = {
      children: PropTypes.any
  }
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-slate-50`}
      >
        <main>{children}</main>
        <Analytics />  
        <SpeedInsights />  
      </body>
    </html>
  );
}
