import PokemonCard from "@src/components/PokemonCard";
import PokemonForm from "@src/components/PokemonForm";
import { PokemonNameProps, PokemonProps } from "@src/types/types";

type MetaDataProps = {
  params: { pokemonName: string };
};

export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: params.pokemonName,
    description: "This is pokemon detail page",
  };
}

const fetchPokemonDetails = async (pokemonName: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export default async function PokemonDetail({ params }: MetaDataProps) {
  const pokemonDetail = await fetchPokemonDetails(params.pokemonName);
  console.log(pokemonDetail, "pokemonDetail");

  return <PokemonCard pokemonDetails={{ pokemonDetail }} />;
}
