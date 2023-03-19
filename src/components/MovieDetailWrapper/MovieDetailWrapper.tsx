import { MovieDTO } from "@src/types/types";

import Movie from "../Movie/Movie";

type MovieDetailWrapperProps = {
  movie: MovieDTO;
};
const MovieDetailWrapper = ({ movie }: MovieDetailWrapperProps) => {
  return <Movie movieDetail={movie} />;
};

export default MovieDetailWrapper;
