import MovieWrapper from "@src/components/MovieWrapper";
import { MovieDTO } from "@src/types/types";
import { fetchAllMovies } from "../../helpers/apiHelper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "This is all movie lists",
};

export default async function Movie() {
  const movieList: MovieDTO[] = await fetchAllMovies();
  console.log(movieList);
  return (
    <div>
      <MovieWrapper movieList={movieList} />
    </div>
  );
}
