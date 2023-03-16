"use client";
import { MovieObject } from "@src/types/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type MovieContextType = {
  movieData: MovieObject | undefined;
  setShowHigherResolutionImage(arg: boolean): void;
  showHigherResolutionImage: boolean;
  setMovieData(arg: MovieObject | undefined): void;
};

type MovieContextProps = {
  children: ReactNode;
};

const movieContextDefaultValues: MovieContextType = {
  movieData: undefined,
  setShowHigherResolutionImage: () => false,
  showHigherResolutionImage: false,
  setMovieData: () => null,
};

const MovieContext = createContext<MovieContextType>(movieContextDefaultValues);

export function useMovie() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }: MovieContextProps) {
  const [movieData, setMovieData] = useState<MovieObject>();
  const [showHigherResolutionImage, setShowHigherResolutionImage] =
    useState<boolean>(false);

  return (
    <MovieContext.Provider
      value={{
        movieData,
        setMovieData,
        showHigherResolutionImage,
        setShowHigherResolutionImage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
