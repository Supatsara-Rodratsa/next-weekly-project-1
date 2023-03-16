import MovieCard from "@src/components/MovieCard";
import MovieData from "@src/data/movies.json";
import { MovieObject } from "@src/types/types";
import type { Metadata } from "next";

export default function Home() {
  return <MovieCard movieDetail={MovieData as MovieObject} />;
}
