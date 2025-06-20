import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PropTypes from 'prop-types';
// import Favicon from "react-favicon";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-slate-50`}
      >
        {children}
        <SpeedInsights
          // url="https://jamesfmare.com"
          // url="https://portfolio-website-jamesfmare.vercel.app/"
          // url="http://localhost:3000/"
          /* url="https://portfolio-website-jamesfmare.vercel.app/"
          token={process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_TOKEN}
          className="fixed bottom-0 right-0 p-4 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg z-50"
          style={{ width: '300px', height: '200px' }}
          options={{
            lighthouse: {
              performance: true,
              accessibility: true,
              bestPractices: true,
              seo: true,
              pwa: false,
            },
            insights: {
              performance: true,
              accessibility: true,
              bestPractices: true,
              seo: true,
            },
          }} */
        />  
      </body>
    </html>
  );
}
