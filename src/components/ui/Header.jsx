import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between py-4">
      <NavLink to="/" className="text-3xl font-bold">
        Logo
      </NavLink>
      <SearchBar />
      <Navbar />
    </header>
  );
};

export default Header;
