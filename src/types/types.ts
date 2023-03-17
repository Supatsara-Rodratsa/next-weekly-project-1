import { ResponseType } from "axios";

export type MovieObject = {
  id: string;
  actors: string[];
  desc: string;
  directors: string[];
  genre: string[];
  image_url: string;
  imdb_url: string;
  name: string;
  rating: number;
  year: number;
  oscars: Oscar[];
  relatedMovies: RelatedMovie[];
};

type Oscar = {
  oscar: string;
  name: string;
  year: string;
};

type RelatedMovie = {
  id: number;
  name: string;
};

export type AxiosProps<T = string> = {
  method?: "POST" | "GET" | "PUT";
  responseType?: ResponseType;
  url: string;
  data?: T;
};

export type PokemonProps = {
  count: number;
  next: string;
  previous: null;
  results: PokemonNameProps[];
};

export type PokemonNameProps = {
  name: string;
  url: string;
};

export type Align = "start" | "center" | "end";
export type TextTransform = "uppercase" | "lowercase" | "capitalize";
export type IconCategory = "calendar" | "rating";
export type Direction = "row" | "column";
export type JustifyContent = "start" | "center" | "end" | "between" | "around";
export type FontWeight = "light" | "normal" | "medium" | "bold" | "extrabold";
