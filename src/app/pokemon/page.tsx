import PokemonForm from "@src/components/PokemonForm";
import { PokemonNameProps, PokemonProps } from "@src/types/types";

const fetchPokemonList = async () => {
  const response: PokemonProps = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export default async function Pokemon() {
  const pokemonList: PokemonProps = await fetchPokemonList();
  return (
    <PokemonForm
      pokemonList={pokemonList.results.map((it: PokemonNameProps) => it.name)}
    />
  );
}
