/* eslint-disable @typescript-eslint/no-empty-function */
"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { MovieDTO } from "@src/types/types";

type MovieContextType = {
  currentMovieSearch: string;
  setCurrentMovieSearch(currentValue: string): void;
  allMovies: MovieDTO[];
  setAllMovies(movies: MovieDTO[]): void;
  favoriteMovies: string[];
  setFavoriteMovies(list: string[]): void;
  historyMovie: string[];
  setHistoryMovie(list: string[]): void;
  allFavMovies: MovieDTO[];
  allSeenMovie: MovieDTO[];
  allGenres: Set<string>;
  setAllGenres(list: Set<string>): void;
  selectedGenres: string[];
  setSelectedGenres(list: string[]): void;
  sortedBy: string;
  setSortedBy(sort: string): void;
};

type MovieContextProps = {
  children: ReactNode;
};

const movieContextDefaultValues: MovieContextType = {
  currentMovieSearch: "",
  setCurrentMovieSearch: () => {},
  allMovies: [],
  setAllMovies: () => {},
  favoriteMovies: [],
  setFavoriteMovies: () => {},
  historyMovie: [],
  setHistoryMovie: () => {},
  allFavMovies: [],
  allSeenMovie: [],
  allGenres: new Set(),
  setAllGenres: () => {},
  selectedGenres: [],
  setSelectedGenres: () => {},
  sortedBy: "",
  setSortedBy: () => {},
};

const MovieContext = createContext<MovieContextType>(movieContextDefaultValues);

export function useMovie() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }: MovieContextProps) {
  const [allMovies, setAllMovies] = useState<MovieDTO[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<string[]>([]);
  const [allFavMovies, setAllFavMovies] = useState<MovieDTO[]>([]);
  const [historyMovie, setHistoryMovie] = useState<string[]>([]);
  const [allSeenMovie, setAllSeenMovies] = useState<MovieDTO[]>([]);
  const [currentMovieSearch, setCurrentMovieSearch] = useState<string>("");
  const [allGenres, setAllGenres] = useState<Set<string>>(new Set());
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortedBy, setSortedBy] = useState<string>("");

  useEffect(() => {
    const currentFavMovie: MovieDTO[] = allMovies.filter((movie: MovieDTO) =>
      favoriteMovies.some((favMovieId: string) =>
        movie.imdb_url.includes(favMovieId)
      )
    );
    setAllFavMovies(currentFavMovie);

    const currentHistoryMovie: MovieDTO[] = allMovies.filter(
      (movie: MovieDTO) =>
        historyMovie.some((favMovieId: string) =>
          movie.imdb_url.includes(favMovieId)
        )
    );
    setAllSeenMovies(currentHistoryMovie);
  }, [favoriteMovies, allMovies, historyMovie, allGenres, selectedGenres]);

  const data = {
    currentMovieSearch,
    setCurrentMovieSearch,
    allMovies,
    setAllMovies,
    favoriteMovies,
    setFavoriteMovies,
    historyMovie,
    setHistoryMovie,
    allFavMovies,
    allSeenMovie,
    allGenres,
    setAllGenres,
    selectedGenres,
    setSelectedGenres,
    sortedBy,
    setSortedBy,
  };
  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
}
