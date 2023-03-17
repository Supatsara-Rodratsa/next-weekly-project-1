"use client";
import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { css } from "@emotion/css";
import Title from "../Title";
import Paragraph from "../Paragraph";
import { motion } from "framer-motion";

type PokemonCardProps = {
  pokemonDetails: any;
  children: ReactNode;
  image: string;
  text: string;
  title: string;
};

const PokemonImageContainer = ({
  children,
}: Pick<PokemonCardProps, "children">) => {
  return <div className="relative w-[350px] h-fit">{children}</div>;
};

const PokemonImage = ({ image }: Pick<PokemonCardProps, "image">) => {
  return (
    <Image
      className="object-contain"
      src={image}
      width={300}
      height={300}
      alt="pokemon profile"
      sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
    />
  );
};

const DetailLayout = ({ children }: Pick<PokemonCardProps, "children">) => {
  return <div className="flex items-center w-full gap-2">{children}</div>;
};

const Details = ({ text, title }: Pick<PokemonCardProps, "text" | "title">) => {
  return (
    <DetailLayout>
      <Title color="black" fontSize={14}>
        {title}:
      </Title>
      <Paragraph color="black" fontSize={14}>
        {text}
      </Paragraph>
    </DetailLayout>
  );
};

const PokemonCardContainer = ({
  children,
}: Pick<PokemonCardProps, "children">) => {
  const style = css`
    :before {
      width: 100%;
      position: absolute;
      background-image: url("https://i.pinimg.com/originals/fd/2d/07/fd2d07e43d17a73270a196733ac301b8.jpg");
      content: "";
      border-radius: 8px;
    }
  `;
  return (
    <div
      className={clsx(
        "flex w-full bg-white p-8 rounded-lg",
        `before:bg-no-repeat before:bg-cover before:w-full before:h-[600px] w-full before:absolute before:blur-[8rem]`,
        style,
        "tablet:flex-wrap mobile:flex-wrap"
      )}
    >
      {children}
    </div>
  );
};

const PokemonDetailContainer = ({
  children,
}: Pick<PokemonCardProps, "children">) => {
  return (
    <div className="flex flex-col p-4 gap-3 z-10 min-w-[300px]">{children}</div>
  );
};

const PokemonDetailLayout = ({
  children,
}: Pick<PokemonCardProps, "children">) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const PokemonCard = ({
  pokemonDetails,
}: Pick<PokemonCardProps, "pokemonDetails">) => {
  const pokemonDetail = pokemonDetails?.pokemonDetail;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      <PokemonCardContainer>
        <PokemonImageContainer>
          <PokemonImage
            image={pokemonDetail.sprites.other.dream_world.front_default}
          />
        </PokemonImageContainer>
        <PokemonDetailContainer>
          <Title
            textTransform="uppercase"
            color="-"
            customStyle="text-yellow-600 text-3xl"
          >
            {pokemonDetail.name}
          </Title>
          <PokemonDetailLayout>
            <Details
              title="Abilities"
              text={pokemonDetail.abilities
                .map((item: any) => item.ability.name)
                .join(", ")}
            />
            <Details title="Weight" text={`${pokemonDetail.weight}`} />
            <Details title="Height" text={`${pokemonDetail.height}`} />
            <Details title="Species" text={pokemonDetail.species.name} />
            <Details
              title="Types"
              text={pokemonDetail.types
                .map((item: any) => item.type.name)
                .join(", ")}
            />
            <a
              className="mt-1 hover:underline text-yellow-900"
              href={`https://en.wikipedia.org/wiki/${pokemonDetail.name}`}
              target="_blank"
            >
              More info..
            </a>
          </PokemonDetailLayout>
        </PokemonDetailContainer>
      </PokemonCardContainer>
    </motion.div>
  );
};

export default PokemonCard;
