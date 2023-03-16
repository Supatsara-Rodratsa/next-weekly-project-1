import Movie from "@src/components/Movie";
import MovieCard from "@src/components/MovieCard";
import MovieData from "@src/data/movies.json";
import { MovieObject } from "@src/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie App",
  description: "This is Movie Home Page",
};

export default function Home() {
  return (
    <div className="flex w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7">
      <MovieCard movieDetail={MovieData as MovieObject} />
    </div>
  );
}
