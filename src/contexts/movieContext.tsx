"use client";
import useAxios from "@src/hooks/useAxios";
import { AxiosProps, MovieObject } from "@src/types/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type MovieContextType = {
  movieData: MovieObject | undefined;
  useMovieData({ method, url }: AxiosProps): void;
};

type MovieContextProps = {
  children: ReactNode;
};

const movieContextDefaultValues: MovieContextType = {
  movieData: undefined,
  useMovieData: () => {},
};

const MovieContext = createContext<MovieContextType>(movieContextDefaultValues);

export function useMovie() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }: MovieContextProps) {
  const [movieData, setMovieData] = useState<MovieObject>();

  const useMovieData = ({ method, url }: AxiosProps) => {
    const { response } = useAxios({
      method,
      url,
    } as Pick<AxiosProps, "method" | "url">);

    useEffect(() => {
      if (response) {
        setMovieData(response as MovieObject);
      }
    }, [response]);
  };

  return (
    <MovieContext.Provider value={{ movieData, useMovieData }}>
      {children}
    </MovieContext.Provider>
  );
}
