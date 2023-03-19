import { MovieDTO } from "@src/types/types";

export async function fetchAllMovies() {
  const response = await fetch(
    "https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json"
  );
  return (await response.json()) as MovieDTO[];
}

export async function fetchMovieById(
  imdbId: string
): Promise<MovieDTO | undefined> {
  const movies = await fetchAllMovies();
  return movies.find((movie: MovieDTO) => movie.imdb_url.includes(imdbId));
}
