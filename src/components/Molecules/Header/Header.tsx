import { Link, useLocation } from "react-router-dom";
import BoltIcon from "../../../Assets/BoltIcon";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="p-4 text-white flex justify-center gap-5 flex-col w-full items-center">
      <h2 className="flex items-center gap-2 text-3xl font-bold text-black">
        <BoltIcon fill="#dcc74e" width={30} height={30} /> Pokédex
      </h2>
      <span className="text-[#606a73]">
        Discover and explore Pokemon with{" "}
        {currentPath === "/" ? "page controls" : "infinite scroll"}
      </span>
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className={`w-36 h-12 rounded-lg flex items-center justify-center font-semibold ${
            currentPath === "/" ? " bg-black text-white" : "bg-white text-black"
          }`}
        >
          Pagination
        </Link>

        <Link
          to="/load-more"
          className={`w-36 h-12 rounded-lg flex items-center justify-center font-semibold ${
            currentPath === "/load-more"
              ? " bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Load More
        </Link>
      </div>
    </nav>
  );
};

export default Header;
