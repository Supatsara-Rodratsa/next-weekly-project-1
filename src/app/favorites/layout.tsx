import { LayoutProps } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite Movies",
  description: "This is all favorite movie lists",
};

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
