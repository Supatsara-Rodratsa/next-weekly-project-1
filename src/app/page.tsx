"use client";
import Title from "@src/components/Title";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7 gap-4"
    >
      <Title textAlign="none" fontWeight="medium" customStyle="text-center">
        Welcome To Next Homework
      </Title>
      <Title
        textAlign="center"
        fontWeight="medium"
        fontSize={1}
        customStyle="text-3xl"
      >
        Created By Rose
      </Title>
      <p className="text-5xl">👩🏼‍💻 💻</p>
    </motion.div>
  );
}
