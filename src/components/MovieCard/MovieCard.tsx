"use client";
import { IconCategory, MovieDTO } from "@src/types/types";
import Image from "next/image";
import Title from "../Title";
import { useRouter } from "next/navigation";
import { css } from "@emotion/css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { countingRating, getCurrentMovieId } from "@src/utils/utilities";
import Paragraph from "../Paragraph";
import { useMovie } from "@src/contexts/movieContext";
import { useEffect, useState } from "react";

type MovieCardProps = {
  movieDetail: MovieDTO;
};

const renderStar = (starType: IconCategory, i: number) => {
  return <Icon key={i} type={starType} color="red" size="18px" />;
};

const MovieStar = ({ rating }: Pick<MovieDTO, "rating">) => {
  const stars: string[] = countingRating(rating);
  return (
    <>
      {stars.map((star: string, i: number) =>
        renderStar(star as IconCategory, i)
      )}
    </>
  );
};

const MovieDetail = ({ movieDetail }: MovieCardProps) => {
  return (
    <div className="flex w-full h-full flex-col justify-end">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <Title
            fontSize={20}
            customStyle="text-[24px] font-light tablet:text-xl"
          >
            {movieDetail.name}
          </Title>
          <Paragraph>2022</Paragraph>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <MovieStar rating={movieDetail.rating} />
          </div>
          <Paragraph>Score: {movieDetail.rating} / 10 </Paragraph>
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ movieDetail }: MovieCardProps) => {
  const router = useRouter();
  const { favoriteMovies, setFavoriteMovies, historyMovie, setHistoryMovie } =
    useMovie();
  const currentMovieId = getCurrentMovieId(movieDetail);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const findIndex = favoriteMovies.findIndex((movieId: string) =>
      movieId.includes(currentMovieId)
    );
    setIsFavorite(findIndex !== -1);
  }, [favoriteMovies, currentMovieId]);

  const handleFavoriteMovie = () => {
    if (!isFavorite) {
      favoriteMovies.push(currentMovieId);
      setFavoriteMovies([...favoriteMovies]);
    } else {
      let index = favoriteMovies.indexOf(currentMovieId);
      if (index !== -1) {
        favoriteMovies.splice(index, 1);
        setFavoriteMovies([...favoriteMovies]);
      }
    }
    setIsFavorite(!isFavorite);
  };

  const routeToMovieDetail = () => {
    router.push(`/movie/${currentMovieId}`);
  };

  const style = css`
    :before {
      background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 1)
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={clsx(
        "h-full relative justify-center flex items-center cursor-pointer"
      )}
    >
      <div
        onClick={routeToMovieDetail}
        className={clsx("relative h-[400px] w-[300px] bg-white", style)}
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
        <div className="relative flex w-full h-full p-4 items-end z-10">
          <MovieDetail movieDetail={movieDetail} />
        </div>
      </div>
      <div
        className="absolute top-3 right-3 z-20"
        onClick={handleFavoriteMovie}
      >
        <Icon
          type="fill-heart"
          color={isFavorite ? "red" : "white"}
          size="30px"
        />
      </div>
    </motion.div>
  );
};

export default MovieCard;
