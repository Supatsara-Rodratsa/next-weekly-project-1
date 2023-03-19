"use client";
import { motion } from "framer-motion";

import Paragraph from "../Paragraph";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Paragraph customStyle="text-[20px]">Data Not Found</Paragraph>
    </motion.div>
  );
};

export default EmptyState;
