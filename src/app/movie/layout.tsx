import "@src/styles/globals.css";
import { LayoutProps } from "../layout";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7 text-white">
      {children}
    </div>
  );
}
