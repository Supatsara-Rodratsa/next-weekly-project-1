import { ReactNode } from "react";
import "@src/styles/globals.css";
import Nav from "@src/components/Nav";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Assignment",
  description: "This is Next Homework",
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
        <Nav />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
