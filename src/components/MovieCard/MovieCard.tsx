"use client";
import { MovieObject } from "@src/types/types";
import Image from "next/image";
import Title from "../Title";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useMovie } from "@src/contexts/movieContext";
import { css } from "@emotion/css";
import clsx from "clsx";
import { COLORS } from "@src/constants/constants";

type MovieCardProps = {
  movieDetail: MovieObject;
};

const MovieCard = ({ movieDetail }: MovieCardProps) => {
  const router = useRouter();
  const { setMovieData } = useMovie();
  const routeToMovieDetail = () => {
    setMovieData(movieDetail);
    router.push(`/movies/${movieDetail.id}`);
  };

  const style = css`
    :hover:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.434) 50%,
        rgba(0, 0, 0, 0.9) 100%
      );
      content: "";
      width: 100%;
      height: 100%;
      z-index: 9;
      position: absolute;
      transition: all 1s;
    }
  `;

  return (
    <div className={clsx("w-full h-full justify-center flex items-center")}>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-center">
          <Title>{movieDetail.name}</Title>
        </div>
        <div
          // onClick={routeToMovieDetail}
          className={clsx("relative h-[500px] w-[400px] bg-white", style)}
        >
          <Image
            priority
            className={clsx("object-cover object-top")}
            src={movieDetail.image_url}
            fill
            alt="movie poster"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="absolute -translate-x-2/4 -translate-y-2/4 top-[50%] left-[50%] z-[10]">
            <Button label="See Movie Detail" onClick={routeToMovieDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
