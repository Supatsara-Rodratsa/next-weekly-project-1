import MovieDetailWrapper from "@src/components/MovieDetailWrapper";
import { fetchMovieById } from "@src/helpers/apiHelper";

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
