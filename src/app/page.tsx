"use client";
import Movie from "@src/components/Movie";
import { useMovie } from "@src/contexts/movieContext";
export default function Home() {
  const { useMovieData, movieData } = useMovie();
  useMovieData({ method: "GET", url: "data/movies.json" });

  return (
    <div className="flex w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7">
      {movieData && <Movie movieDetail={movieData} />}
    </div>
  );
}
