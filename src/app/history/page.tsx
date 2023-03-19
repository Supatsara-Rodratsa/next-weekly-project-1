"use client";
import EmptyState from "@src/components/EmptyState";
import MovieGrid from "@src/components/MovieGrid";
import { useMovie } from "@src/contexts/movieContext";

export default function FavoriteMovie() {
  const { allSeenMovie } = useMovie();

  if (allSeenMovie.length > 0) return <MovieGrid movieList={allSeenMovie} />;
  else return <EmptyState />;
}
