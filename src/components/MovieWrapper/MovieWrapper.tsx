"use client";
import { useMovie } from "@src/contexts/movieContext";
import MovieGrid from "../MovieGrid";
import { MovieDTO } from "@src/types/types";
import { useEffect, useState } from "react";
import EmptyState from "../EmptyState";
import Filter from "../Filter";

type MovieGirdProp = {
  movieList: MovieDTO[];
};

const MovieWrapper = ({ movieList }: MovieGirdProp) => {
  const { currentMovieSearch, setAllMovies, setAllGenres, selectedGenres } =
    useMovie();
  const [currentMovies, setCurrentMovies] = useState<MovieDTO[]>(movieList);

  useEffect(() => {
    let filterMovie: MovieDTO[] = movieList;
    setAllMovies(movieList);
    if (selectedGenres.length > 0) {
      filterMovie = filterMovie.filter((movie) => {
        return selectedGenres.some((genre: string) =>
          movie.genre.includes(genre)
        );
      });
    }
    if (currentMovieSearch != "") {
      filterMovie = filterMovie.filter((movie) =>
        movie.name.toLowerCase().includes(currentMovieSearch.toLowerCase())
      );
    }
    setCurrentMovies(filterMovie);

    let temp = new Set<string>();
    movieList.forEach((movie: MovieDTO) =>
      movie.genre.forEach((genre: string) => {
        temp.add(genre);
      })
    );
    setAllGenres(new Set(temp));
  }, [
    currentMovieSearch,
    movieList,
    setAllGenres,
    setAllMovies,
    selectedGenres,
  ]);

  return (
    <div className="p-10">
      {currentMovies.length > 0 ? (
        <div className="flex flex-col gap-8">
          <Filter />
          <MovieGrid movieList={currentMovies} />
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default MovieWrapper;
