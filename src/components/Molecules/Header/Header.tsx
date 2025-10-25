import BoltIcon from "../../../Assets/svgs/BoltIcon";

interface HeaderProps {
  view: string;
  setView: (view: string) => void;
}

const Header = ({ view, setView }: HeaderProps) => {
  const handleViewChange = (view: string) => {
    setView(view);
  };

  return (
    <nav className="p-4 text-white flex justify-center gap-5 flex-col w-full items-center">
      <h2 className="flex items-center gap-2 text-3xl font-bold text-black">
        <BoltIcon fill="#dcc74e" width={30} height={30} /> Pokédex
      </h2>
      <span className="text-[#606a73]">
        Discover and explore Pokemon with{" "}
        {view === "page-controls" ? "page controls" : "infinite scroll"}
      </span>
      <div className="flex items-center gap-4">
        <button
          className={`w-36 h-12 rounded-lg flex items-center justify-center font-semibold ${
            view === "page-controls"
              ? " bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleViewChange("page-controls")}
        >
          Page Controls
        </button>

        <button
          className={`w-36 h-12 rounded-lg flex items-center justify-center font-semibold ${
            view === "load-more"
              ? " bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleViewChange("load-more")}
        >
          Infinite Scroll
        </button>
      </div>
    </nav>
  );
};

export default Header;
