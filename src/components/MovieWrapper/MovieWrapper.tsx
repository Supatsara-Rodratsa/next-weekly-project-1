"use client";
import { useEffect, useState } from "react";

import { useMovie } from "@src/contexts/movieContext";
import { MovieDTO } from "@src/types/types";
import {
  filterMovieByGenres,
  filterMovieBySearching,
  setGenres,
  sortedByKey,
} from "@src/utils/utilities";

import EmptyState from "../EmptyState";
import Filter from "../Filter";
import MovieGrid from "../MovieGrid";
import Sort from "../Sort";

type MovieGirdProp = {
  movieList: MovieDTO[];
};

const MovieWrapper = ({ movieList }: MovieGirdProp) => {
  const {
    currentMovieSearch,
    setAllMovies,
    setAllGenres,
    selectedGenres,
    sortedBy,
  } = useMovie();
  const [currentMovies, setCurrentMovies] = useState<MovieDTO[]>(movieList);

  useEffect(() => {
    let filterMovie: MovieDTO[] = movieList;
    setAllMovies(movieList);

    if (selectedGenres.length > 0) {
      filterMovie = filterMovieByGenres(filterMovie, selectedGenres);
    }

    if (currentMovieSearch != "") {
      filterMovie = filterMovieBySearching(filterMovie, currentMovieSearch);
    }

    filterMovie = sortedByKey(filterMovie, sortedBy);
    setCurrentMovies(filterMovie);
    setAllGenres(new Set(setGenres(movieList)));
  }, [
    currentMovieSearch,
    movieList,
    setAllGenres,
    setAllMovies,
    selectedGenres,
    sortedBy,
  ]);

  return (
    <div className="p-10">
      {currentMovies.length > 0 ? (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <Filter />
            <Sort />
          </div>
          <MovieGrid movieList={currentMovies} />
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default MovieWrapper;
