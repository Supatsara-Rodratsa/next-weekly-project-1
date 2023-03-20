import { motion } from "framer-motion";
import { useState } from "react";

import { useMovie } from "@src/contexts/movieContext";

import Button from "../Button";
import Paragraph from "../Paragraph";
import Select from "../Select";

const Sort = () => {
  const { setSortedBy, sortedBy } = useMovie();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const getSelectedValue = (value: string) => {
    setSelectedValue(value);
    setSortedBy(value);
  };

  const dialogHandler = () => {
    setSortedBy("");
    setSelectedValue("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4"
    >
      <div className="text-center flex gap-3 justify-center items-center">
        <Paragraph>Sort By:</Paragraph>
        <Select
          id="Sort"
          options={["Name", "Rating", "Year"]}
          onSelectedValue={getSelectedValue}
          defaultValue={selectedValue}
        />
        {sortedBy !== "" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Button
              label={`Clear`}
              customStyle="rounded-[30px] p-[2px]"
              onClick={dialogHandler}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Sort;
