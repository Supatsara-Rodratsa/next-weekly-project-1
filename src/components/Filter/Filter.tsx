import Paragraph from "../Paragraph";
import Select from "../Select";
import GenreCheckBox from "../GenreCheckBox";
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";

const Filter = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4"
    >
      <div className="text-center flex gap-3 justify-center items-center">
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
          >
            <Button
              label={`Edit ${selectedValue}`}
              customStyle="rounded-[30px] p-[2px]"
              onClick={dialogHandler}
            />
          </motion.div>
        )}
      </div>
      {openGenreDialog && <GenreCheckBox onCloseDialog={closeDialog} />}
    </motion.div>
  );
};

export default Filter;
