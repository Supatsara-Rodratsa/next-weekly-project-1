import { ReactNode } from "react";
import "@src/styles/globals.css";
import { MovieProvider } from "@src/contexts/movieContext";
import Nav from "@src/components/Nav";
import Script from "next/script";

export const metadata = {
  title: "Movie App",
  description: "Generated Movie App",
};

export type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <Script id="test-script">{'{console.log("Hi There!")} '}</Script>
      </head>

      <body className="bg-black">
        <MovieProvider>
          <Nav />
          <div className="mt-16">{children}</div>
        </MovieProvider>
      </body>
    </html>
  );
}
