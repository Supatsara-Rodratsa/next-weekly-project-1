"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Icon from "../Icon";
import SearchMovie from "../SearchMovie";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  if (pathname !== "/")
    return (
      <motion.div
        key="nav"
        initial={{ opacity: 1, y: -80 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        className="fixed top-0 w-full flex text-white px-10 py-5 text-lg z-[99] bg-black"
      >
        {!pathname.includes("/movie/") ? (
          <div className="flex gap-4 items-center justify-between w-full">
            <div className="flex gap-10 mobile:gap-4">
              <Link href="/movie" className="hover:text-red">
                Home
              </Link>
              <Link href="/favorites" className="hover:text-red">
                Favorites
              </Link>
              <Link href="/history" className="hover:text-red">
                History
              </Link>
            </div>
            {pathname.includes("/movie") && <SearchMovie />}
          </div>
        ) : (
          <div className="flex items-center cursor-pointer" onClick={goBack}>
            <Icon type="back" size="30px" color="white" />
          </div>
        )}
      </motion.div>
    );
  return <></>;
};

export default Nav;
