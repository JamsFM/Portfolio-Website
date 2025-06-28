import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Header';
import Footer from './components/Footer';
import PropTypes from 'prop-types';

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
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  RootLayout.propTypes = {
      children: PropTypes.any
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-slate-50`}
      >
        <main>
          <Navbar />
          <div className="pt-8 sm:pt-10 lg:pt-12 container mx-auto px-4 sm:px-10 font-[family-name:var(--font-geist-sans)]">
            {children}
          </div>
          <Footer />
        </main>
        <Analytics />  
        <SpeedInsights />  
      </body>
    </html>
  );
}
