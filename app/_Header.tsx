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
    <header className="h-full w-full bg-gradient-to-br from-yellow-400 to-amber-600 mb-4 pb-2 flex flex-col border-b-2 border-slate-800">
      <div className="px-16 bg-white border-b-2 border-slate-800">
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

          {/* <SearchBar /> */}
        </div>
        <ul className="flex items-center justify-around py-2">
          <Link href={`/browse/1`}>
            <li className="flex space-x-2 items-center justify-center uppercase text-slate-600">
              <GiArchiveResearch className="text-4xl" />
              {`browse`}
            </li>
          </Link>
          <Link href={`/search`}>
            <li className="flex space-x-2 items-center justify-center uppercase text-slate-600">
              <GiMagnifyingGlass className="text-4xl" />
              {`search`}
            </li>
          </Link>
          <Link href={`/learn`}>
            <li className="flex space-x-2 items-center justify-center uppercase text-slate-600">
              <GiLightBulb className="text-4xl" />
              {`learn`}
            </li>
          </Link>
          <Link href={`/play`}>
            <li className="flex space-x-2 items-center justify-center uppercase text-slate-600">
              <GiCardPlay className="text-4xl" />
              {`play`}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
