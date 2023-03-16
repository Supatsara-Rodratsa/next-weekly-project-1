"use client";
import { useRouter } from "next/navigation";

export default function Movie() {
  const router = useRouter();

  const routeToHigherResolutionPage = () => {
    router.push(`/movies/tt0099685`);
  };
  return (
    <div
      onClick={routeToHigherResolutionPage}
      className="flex w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7 text-white"
    >
      Hi 2
    </div>
  );
}
