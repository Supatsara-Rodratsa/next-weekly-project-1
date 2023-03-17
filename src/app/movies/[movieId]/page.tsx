import Movie from "@src/components/Movie";
import MovieData from "@src/data/movies.json";
import { MovieObject } from "@src/types/types";

type MetaDataProps = {
  params: { movieId: string };
};

export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: params.movieId,
    description: "This is movie detail page",
  };
}

export default function MovieDetail({ params }: MetaDataProps) {
  return <Movie movieDetail={MovieData as MovieObject} />;
}
