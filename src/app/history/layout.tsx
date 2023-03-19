import { LayoutProps } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "This is all seen movie lists",
};

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
