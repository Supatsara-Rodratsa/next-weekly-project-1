"use client";
import Paragraph from "../Paragraph";
import { motion } from "framer-motion";

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
