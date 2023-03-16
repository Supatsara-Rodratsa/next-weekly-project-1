"use client";
import { MovieObject } from "@src/types/types";
import clsx from "clsx";
import { ReactNode } from "react";
import Title from "../Title";
import Paragraph from "../Paragraph";
import Badge from "../Badge";
import { countingRating } from "@src/utils/utilities";
import Icon from "../Icon";
import { COLORS, ICON } from "@src/constants/constants";
import Image from "next/image";
import { css } from "@emotion/css";
import { motion } from "framer-motion";

type MovieProps = {
  movieDetail: MovieObject;
  onSelect?(arg: boolean): void;
  updatedStatus?: boolean;
  children?: ReactNode;
};

const MovieCardContainer = ({
  movieDetail,
  children,
}: Pick<MovieProps, "movieDetail" | "children">) => {
  // console.log(movieDetail.image_url, "movieDetail.image_url");
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
        "flex flex-row relative justify-center items-center gap-6 overflow-hidden h-full w-full",
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

const RatingContainer = ({ children }: Pick<MovieProps, "children">) => {
  return <div className="w-full flex justify-center gap-4">{children}</div>;
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

const MovieDescription = ({ desc }: Pick<MovieObject, "desc">) => {
  return (
    <div className="flex flex-col gap-2">
      <Title fontSize={14}>Description:</Title>
      <Paragraph>{desc}</Paragraph>
    </div>
  );
};

const RelatedMovie = ({
  relatedMovies,
}: Pick<MovieObject, "relatedMovies">) => {
  return (
    <div className="flex items-start w-full gap-2">
      <Title fontSize={14}>Related Movie:</Title>
      <Paragraph fontSize={14}>
        {relatedMovies.map(({ name }) => name).join(", ")}
      </Paragraph>
    </div>
  );
};

const Director = ({ directors }: Pick<MovieObject, "directors">) => {
  return (
    <div className="flex items-center w-full gap-2">
      <Title fontSize={14}>Director:</Title>
      <Paragraph fontSize={14}>{directors.join(", ")}</Paragraph>
    </div>
  );
};

const Actor = ({ actors }: Pick<MovieObject, "actors">) => {
  return (
    <div className="flex items-start w-full gap-2">
      <Title fontSize={14}>Actors:</Title>
      <Paragraph fontSize={14}>{actors.join(", ")}</Paragraph>
    </div>
  );
};

const Genre = ({ genre }: Pick<MovieObject, "genre">) => {
  return (
    <div className="flex gap-2 items-start mobile:flex-wrap">
      <Title fontSize={14}>Genre: </Title>
      {genre.map((item, i) => (
        <Badge key={i} label={item} />
      ))}
    </div>
  );
};

const MovieImageContainer = ({ children }: Pick<MovieProps, "children">) => {
  return (
    <div className="relative h-[600px] min-w-[300px] w-full object-cover object-top tablet:min-w-[200px] tablet:h-[500px] mobile:tablet:min-w-[100px] mobile:h-[400px]">
      {children}
    </div>
  );
};

const Year = ({ year }: Pick<MovieObject, "year">) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size="18px" type={ICON.CALENDAR} color={COLORS.RED} />
      <Paragraph textAlign="center">{year}</Paragraph>
    </div>
  );
};

const Rating = ({ rating }: Pick<MovieObject, "rating">) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size="20px" type={ICON.RATING} color={COLORS.RED} />
      <Paragraph textAlign="center">{rating}</Paragraph>
    </div>
  );
};

const IconDetails = ({ children }: Pick<MovieProps, "children">) => {
  return <div className="flex items-center gap-8">{children}</div>;
};

const Movie = ({ movieDetail }: MovieProps) => {
  const stars = countingRating(movieDetail.rating);
  const renderStar = (item: string, i: number) => {
    return <div key={i} dangerouslySetInnerHTML={{ __html: item }} />;
  };

  return (
    <MovieCardContainer movieDetail={movieDetail}>
      <MovieDetailsContainer>
        {/* <RatingContainer>
            {stars.map((star: string, i: number) => renderStar(star, i))}
          </RatingContainer> */}
        <HeaderContainer>
          <Title textAlign="center" textTransform="uppercase">
            {movieDetail.name}
          </Title>
          <IconDetails>
            <Year year={movieDetail.year} />
            <Rating rating={movieDetail.rating} />
          </IconDetails>
        </HeaderContainer>
        <ContentContainer>
          <Director directors={movieDetail.directors} />
          <Actor actors={movieDetail.actors} />
          <Genre genre={movieDetail.genre} />
        </ContentContainer>
        <MovieDescription desc={movieDetail.desc} />
        <RelatedMovie relatedMovies={movieDetail.relatedMovies} />
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
