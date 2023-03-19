"use client";
import { IconCategory, MovieDTO } from "@src/types/types";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import Title from "../Title";
import Paragraph from "../Paragraph";
import Badge from "../Badge";
import { countingRating, getCurrentMovieId } from "@src/utils/utilities";
import Icon from "../Icon";
import { COLORS, ICON } from "@src/constants/constants";
import Image from "next/image";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import Button from "../Button";
import { useMovie } from "@src/contexts/movieContext";

type MovieProps = {
  movieDetail: MovieDTO;
  onSelect?(arg: boolean): void;
  updatedStatus?: boolean;
  children?: ReactNode;
};

const MovieCardContainer = ({
  movieDetail,
  children,
}: Pick<MovieProps, "movieDetail" | "children">) => {
  const style = css`
    :before {
      background-image: url(${movieDetail.image_url});
      content: "";
    }
  `;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={clsx(
        "flex flex-row relative justify-center items-center gap-6 overflow-hidden h-full w-full mx-20",
        `before:bg-no-repeat before:bg-cover before:w-full before:h-[600px] w-full before:absolute before:blur-[8rem]`,
        style,
        "tablet:flex-wrap-reverse mobile:flex-wrap-reverse"
      )}
    >
      {children}
    </motion.div>
  );
};

const MovieDetailsContainer = ({ children }: Pick<MovieProps, "children">) => {
  return (
    <div className="flex flex-col relative w-[80%] py-5 px-12 text-white gap-8 items-center tablet:px-8 mobile:px-4">
      {children}
    </div>
  );
};

const HeaderContainer = ({ children }: Pick<MovieProps, "children">) => {
  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      {children}
    </div>
  );
};

const ContentContainer = ({ children }: Pick<MovieProps, "children">) => {
  return <div className="flex flex-col gap-4 w-full">{children}</div>;
};

const MovieDescription = ({ desc }: Pick<MovieDTO, "desc">) => {
  return (
    <div className="flex flex-col gap-2">
      <Title fontSize={14}>Description:</Title>
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};

const Director = ({ directors }: Pick<MovieDTO, "directors">) => {
  return (
    <div className="flex items-center w-full gap-2">
      <Title fontSize={14}>Director:</Title>
      <Paragraph fontSize={14}>{directors.join(", ")}</Paragraph>
    </div>
  );
};

const Actor = ({ actors }: Pick<MovieDTO, "actors">) => {
  return (
    <div className="flex items-start w-full gap-2">
      <Title fontSize={14}>Actors:</Title>
      <Paragraph fontSize={14}>{actors.join(", ")}</Paragraph>
    </div>
  );
};

const Genre = ({ genre }: Pick<MovieDTO, "genre">) => {
  return (
    <div className="flex gap-2 items-start mobile:flex-wrap">
      <Title fontSize={14}>Genre: </Title>
      {genre.map((item: string, i: number) => (
        <Badge key={i} label={item} />
      ))}
    </div>
  );
};

const MovieImageContainer = ({ children }: Pick<MovieProps, "children">) => {
  return (
    <div className="relative h-[calc(100vh_-_120px)] min-w-[300px] w-full object-cover object-top tablet:min-w-[200px] tablet:h-[500px] mobile:tablet:min-w-[100px] mobile:h-[400px]">
      {children}
    </div>
  );
};

const Year = ({ year }: Pick<MovieDTO, "year">) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size="18px" type={ICON.CALENDAR} color={COLORS.RED} />
      <Paragraph textAlign="center">{year}</Paragraph>
    </div>
  );
};

const Rating = ({ rating }: Pick<MovieDTO, "rating">) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size="20px" type={ICON.RATING} color={COLORS.RED} />
      <Paragraph textAlign="center">{rating} / 10</Paragraph>
    </div>
  );
};

const IconDetails = ({ children }: Pick<MovieProps, "children">) => {
  return <div className="flex items-center gap-8">{children}</div>;
};

const renderStar = (starType: IconCategory, i: number) => {
  return <Icon key={i} type={starType} color="red" size="24px" />;
};

const MovieStar = ({ rating }: Pick<MovieDTO, "rating">) => {
  const stars: string[] = countingRating(rating);
  return (
    <div className="flex gap-1 -mt-2">
      {stars.map((star: string, i: number) =>
        renderStar(star as IconCategory, i)
      )}
    </div>
  );
};

const Movie = ({ movieDetail }: MovieProps) => {
  const { favoriteMovies, setFavoriteMovies, historyMovie, setHistoryMovie } =
    useMovie();
  const currentMovieId = getCurrentMovieId(movieDetail);
  const findIndex = favoriteMovies.findIndex((movieId: string) =>
    movieId.includes(currentMovieId)
  );
  const [isFavorite, setIsFavorite] = useState(findIndex !== -1);
  const findHistoryIndex = historyMovie.findIndex((movieId: string) =>
    movieId.includes(currentMovieId)
  );

  if (findHistoryIndex == -1) {
    historyMovie.push(currentMovieId);
    setHistoryMovie([...historyMovie]);
  }

  const handleFavoriteMovie = () => {
    if (!isFavorite) {
      favoriteMovies.push(currentMovieId);
      setFavoriteMovies(favoriteMovies);
    } else {
      let index = favoriteMovies.indexOf(currentMovieId);
      if (index !== -1) {
        favoriteMovies.splice(index, 1);
        setFavoriteMovies(favoriteMovies);
      }
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <MovieCardContainer movieDetail={movieDetail}>
      {isFavorite && (
        <div className="absolute top-5 left-5">
          <Icon type="fill-heart" color="red" size="30" />
        </div>
      )}
      <MovieDetailsContainer>
        <HeaderContainer>
          <Title
            fontSize={60}
            customStyle="text-3xl font-normal"
            textAlign="center"
            textTransform="uppercase"
          >
            {movieDetail.name}
          </Title>
          <MovieStar rating={movieDetail.rating} />
          <IconDetails>
            <Year year={movieDetail.year} />
            <Rating rating={movieDetail.rating} />
          </IconDetails>
        </HeaderContainer>
        <Button
          customStyle="rounded-[30px]"
          label={
            isFavorite ? "Remove from Favorite Movie" : "Add to Favorite Movie"
          }
          onClick={handleFavoriteMovie}
        />
        <ContentContainer>
          <Director directors={movieDetail.directors} />
          <Actor actors={movieDetail.actors} />
          <Genre genre={movieDetail.genre} />
        </ContentContainer>
        <MovieDescription desc={movieDetail.desc} />
      </MovieDetailsContainer>
      <MovieImageContainer>
        <Image
          className="object-cover object-top"
          src={movieDetail.image_url}
          fill
          alt="movie poster"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </MovieImageContainer>
    </MovieCardContainer>
  );
};

export default Movie;
