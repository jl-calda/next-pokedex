import SearchBar from "../components/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-16">
      <Link href="/">
        <h1>Header</h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
