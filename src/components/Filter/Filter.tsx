import { motion } from "framer-motion";
import { useState } from "react";

import { useMovie } from "@src/contexts/movieContext";

import Button from "../Button";
import GenreCheckBox from "../GenreCheckBox";
import Paragraph from "../Paragraph";
import Select from "../Select";

const Filter = () => {
  const { setSelectedGenres } = useMovie();
  const [selectedValue, setSelectedValue] = useState("");
  const [openGenreDialog, setOpenGenreDialog] = useState(false);
  const getSelectedValue = (value: string) => {
    setSelectedValue(value);
    if (value === "Genre") {
      setOpenGenreDialog(true);
    }
  };

  const closeDialog = (val: boolean) => {
    if (val) {
      setOpenGenreDialog(false);
    }
  };

  const dialogHandler = () => {
    if (selectedValue === "Genre") {
      setOpenGenreDialog(true);
    }
  };

  const clearAllValue = () => {
    setSelectedValue("");
    setSelectedGenres([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4"
    >
      <div className="text-center flex gap-3 justify-center items-center flex-wrap">
        <Paragraph>Filter By:</Paragraph>
        <Select
          id="filter"
          options={["Genre"]}
          onSelectedValue={getSelectedValue}
          defaultValue={selectedValue}
        />
        {selectedValue !== "" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-3"
          >
            <Button
              label={`Edit ${selectedValue}`}
              customStyle="rounded-[30px] p-[2px]"
              onClick={dialogHandler}
            />
            <Button
              label={`Clear`}
              customStyle="rounded-[30px] p-[2px]"
              onClick={clearAllValue}
            />
          </motion.div>
        )}
      </div>
      {openGenreDialog && <GenreCheckBox onCloseDialog={closeDialog} />}
    </motion.div>
  );
};

export default Filter;
