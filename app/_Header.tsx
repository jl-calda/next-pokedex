import SearchBar from "./_SearchBar";
import Link from "next/link";
import Image from "next/image";
import {
  GiLightBulb,
  GiArchiveResearch,
  GiMagnifyingGlass,
  GiCardPlay,
} from "react-icons/gi";

const Header = () => {
  return (
    <header className="h-full w-full bg-gradient-to-br from-yellow-400 to-amber-600 mb-4 pb-2 flex flex-col border-b-[1px] border-slate-800">
      <div className="px-16 bg-white border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link href="/browse/1">
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
        </div>
        {/* <SearchBar /> */}

        {/* Desktop Nav */}
        <nav className="">
          <ul className="flex items-center justify-around py-2">
            <Link href={`/browse/1`}>
              <li className="flex md:flex-row flex-col space-x-2 items-center justify-center text-slate-700 hover:scale-105 hover:text-slate-500 transition-all duration-500">
                <GiArchiveResearch className="text-4xl" />
                <p className="md:text-sm text-xs font-thin">{`browse`}</p>
              </li>
            </Link>
            <Link href={`/search`}>
              <li className="flex md:flex-row flex-col space-x-2 items-center justify-center text-slate-700 hover:scale-105 hover:text-slate-500 transition-all duration-500">
                <GiMagnifyingGlass className="text-4xl" />
                <p className="md:text-sm text-xs font-thin">{`search`}</p>
              </li>
            </Link>
            <Link href={`/learn/1`}>
              <li className="flex md:flex-row flex-col space-x-2 items-center justify-center text-slate-700 hover:scale-105 hover:text-slate-500 transition-all duration-500">
                <GiLightBulb className="text-4xl" />
                <p className="md:text-sm text-xs font-thin">{`learn`}</p>
              </li>
            </Link>
            <Link href={`/play`}>
              <li className="flex md:flex-row flex-col space-x-2 items-center justify-center text-slate-700 hover:scale-105 hover:text-slate-500 transition-all duration-500">
                <GiCardPlay className="text-4xl" />
                <p className="md:text-sm text-xs font-thin">{`play`}</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
