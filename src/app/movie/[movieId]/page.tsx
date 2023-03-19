import { fetchMovieById } from "@src/helpers/apiHelper";
import MovieDetailWrapper from "@src/components/MovieDetailWrapper";

type MetaDataProps = {
  params: { movieId: string };
};

export async function generateMetadata({ params }: MetaDataProps) {
  const currentMovie = await fetchMovieById(params.movieId);
  return {
    title: currentMovie?.name,
    description: "This is movie detail page",
  };
}

export default async function MovieDetail({ params }: MetaDataProps) {
  const currentMovie = await fetchMovieById(params.movieId);
  if (currentMovie) return <MovieDetailWrapper movie={currentMovie} />;
}
