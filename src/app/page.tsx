"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Button from "@src/components/Button";
import Title from "@src/components/Title";

export default function Home() {
  const router = useRouter();
  const routeToAllMovies = () => {
    router.push("/movie");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col w-full min-h-[calc(100vh_-_64px)] justify-center items-center m-auto p-7 gap-4"
    >
      <Title fontWeight="medium" customStyle="text-center">
        Welcome To Movie Search
      </Title>
      <p className="text-5xl">🎞 🎬 🍿</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Button label="GET START" onClick={routeToAllMovies} />
      </motion.div>
    </motion.div>
  );
}
