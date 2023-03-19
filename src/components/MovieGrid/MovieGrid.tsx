import { MovieDTO } from "@src/types/types";

import MovieCard from "../MovieCard";

type MovieGirdProp = {
  movieList: MovieDTO[];
};

const MovieGrid = ({ movieList }: MovieGirdProp) => {
  const renderMovieCard = (movie: MovieDTO, i: number) => {
    return <MovieCard key={i} movieDetail={movie} />;
  };

  return (
    <div className="flex flex-wrap w-full gap-x-6 gap-y-6 justify-center items-center">
      {movieList.map((movie: MovieDTO, i: number) => renderMovieCard(movie, i))}
    </div>
  );
};

export default MovieGrid;
