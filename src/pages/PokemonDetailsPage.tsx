import { Link } from "react-router-dom";
import { PokemonDetailsView } from "../components/Organism/PokemonDetailsView/PokemonDetailsView";
import ArrowIcon from "../Assets/svgs/Arrow";

const PokemonDetailsPage = () => {
  return (
    <div className="min-h-screen justify-start flex flex-col w-full pb-10 pt-5 bg-linear-to-br from-[#faf4ff] to-[#fbe7f3]">
      <Link
        to="/"
        className="bg-white md:mb-[10vh] mt-[4vh] flex items-center justify-center gap-2 border-neutral-400 border ml-6 rounded-lg px-5 py-2 font-medium lg:ml-20 transition-all duration-100 xl:ml-[200px] w-fit hover:bg-gray-100 text-lg"
      >
        <ArrowIcon /> Back to list
      </Link>
      <PokemonDetailsView />
    </div>
  );
};

export default PokemonDetailsPage;
