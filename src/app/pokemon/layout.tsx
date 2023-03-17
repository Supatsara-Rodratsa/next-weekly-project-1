import "@src/styles/globals.css";
import { LayoutProps } from "../layout";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@src/components/Loading";

export const metadata: Metadata = {
  title: "Pokemon",
  description: "This is Pokemon Page",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
