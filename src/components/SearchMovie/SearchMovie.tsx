"use client";
import { motion } from "framer-motion";

import { useMovie } from "@src/contexts/movieContext";

import Input from "../Input";

const SearchMovie = () => {
  const { setCurrentMovieSearch } = useMovie();
  const onChangeSearchResult = (newSearch: string) => {
    setCurrentMovieSearch(newSearch);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="w-fit"
    >
      <Input onChangeValue={onChangeSearchResult} />
    </motion.div>
  );
};

export default SearchMovie;
