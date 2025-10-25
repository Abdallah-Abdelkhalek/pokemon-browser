import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  id: number;
}

export const PokemonCard: React.FC<Props> = ({ name, id }) => (
  <Link
    to={`/pokemon/${name}`}
    className="bg-white rounded-xl shadow hover:scale-[102%] transition p-4 flex flex-col items-center"
  >
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      // fallback to dream-world svg if official artwork is missing
      onError={(e) =>
        (e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`)
      }
      alt={name}
      className="w-full h-full aspect-square bg-[#f6f7f9] rounded-lg"
      loading="lazy"
    />
    <h3 className="capitalize mt-2 font-semibold">{name}</h3>
    <span>#{id.toString().padStart(3, "0")}</span>
  </Link>
);
