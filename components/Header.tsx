import SearchBar from "./SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <h1>Header</h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
