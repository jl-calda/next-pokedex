import SearchBar from "./_SearchBar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full grid px-16 grid-cols-1 md:grid-cols-2 border-b-2 border-slate-700 py-6 mb-4">
      <Link href="/">
        <div className="flex space-x-2 items-center">
          <Image
            src="/assets/pokeball.png"
            height={50}
            width={50}
            alt="pokeball"
          />
          <h1 className="text-3xl font-bold">Pokedex</h1>
        </div>
        <p className="text-sm font-bold">Gotta catch them all!</p>
      </Link>
      {/* <SearchBar /> */}
    </div>
  );
};

export default Header;
