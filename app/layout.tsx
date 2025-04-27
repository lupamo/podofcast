import type { Metadata } from "next";
// import { Montserrat_Alternates } from 'next/font/google';
import "./globals.css";

// const montserratAlternates = Montserrat_Alternates({
//   subsets: ['latin'],
//   weight: ['300', '400', '600', '700'],
//   variable: '--font-montserrat-alternates', // Optional CSS variable
//   display: 'swap'
// });

export const metadata: Metadata = {
  title: "Podofcast",
  description: "App for listening to podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${montserratAlternates.variable} ${montserratAlternates.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
