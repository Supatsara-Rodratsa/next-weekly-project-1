import { Metadata } from "next";

import { LayoutProps } from "../layout";

export const metadata: Metadata = {
  title: "Favorite Movies",
  description: "This is all favorite movie lists",
};

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
