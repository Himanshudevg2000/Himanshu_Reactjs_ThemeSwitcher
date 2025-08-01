/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../utils/themeSlice";

const Header = () => {
  const theme = useSelector((store: any) => store.theme.value);
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-base shadow-md px-4 py-3 md:px-6 md:py-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
        <div className="text-xl font-bold">MyThemeApp</div>

        <nav className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

          <select
            className="p-2 rounded border border-gray-300 w-full md:w-auto"
            value={theme}
            onChange={(e) => dispatch(setTheme(e.target.value))}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
