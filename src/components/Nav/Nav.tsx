import Link from "next/link";
import Title from "../Title";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between text-white px-8 py-7 text-lg z-[99] bg-black">
      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:text-red">
          Movie
        </Link>
        <Link href="/movies" className="hover:text-red">
          Higher Resolution
        </Link>
      </div>
    </div>
  );
};

export default Nav;
