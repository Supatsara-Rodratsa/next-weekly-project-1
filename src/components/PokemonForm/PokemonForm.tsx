"use client";
import Title from "../Title";
import Select from "../Select";
import { motion } from "framer-motion";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PokemonFormProps = {
  pokemonList: string[];
};

const PokemonForm = ({ pokemonList }: PokemonFormProps) => {
  const router = useRouter();
  const [selectedName, setSelectedName] = useState<string>();
  const getSelectedValue = (name: string) => {
    if (name) {
      setSelectedName(name);
    }
  };

  const routeToPokemonDetail = () => {
    router.push(`/pokemon/${selectedName}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex w-full justify-center items-center m-auto p-7"
    >
      <div className="flex flex-col gap-3">
        <Title fontSize={18} customStyle="text-yellow-400">
          Pokemon
        </Title>
        <div className="flex gap-4 justify-center items-center">
          <Select
            id="pokemon"
            options={pokemonList}
            placeholder="Please Select Pokemon Name.."
            onSelectedValue={(val: string) => getSelectedValue(val)}
          />
          <Button
            type="submit"
            label="search"
            customStyle={"bg-yellow-400  hover:text-blue-700 h-[70%]"}
            onClick={routeToPokemonDetail}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonForm;
