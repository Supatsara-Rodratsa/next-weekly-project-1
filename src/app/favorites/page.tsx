"use client";
import EmptyState from "@src/components/EmptyState";
import MovieGrid from "@src/components/MovieGrid";
import { useMovie } from "@src/contexts/movieContext";

export default function FavoriteMovie() {
  const { allFavMovies } = useMovie();

  if (allFavMovies.length > 0) return <MovieGrid movieList={allFavMovies} />;
  else return <EmptyState />;
}
