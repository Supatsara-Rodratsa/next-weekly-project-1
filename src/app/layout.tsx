import { ReactNode } from "react";
import "@src/styles/globals.css";
import { Metadata } from "next";
import { MovieProvider } from "@src/contexts/movieContext";
import Nav from "@src/components/Nav";

export const metadata: Metadata = {
  title: "Movie Search",
  description: "This is Movie Search",
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
