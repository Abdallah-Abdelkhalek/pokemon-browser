import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  id: number;
}

export const PokemonCard: React.FC<Props> = ({ name, image, id }) => (
  <Link
    to={`/pokemon/${name}`}
    className="bg-white rounded-xl shadow hover:scale-105 transition p-4 flex flex-col items-center"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-full aspect-square bg-[#f6f7f9] rounded-lg"
    />
    <h3 className="capitalize mt-2 font-semibold">{name}</h3>
    <span>#{id.toString().padStart(3, "0")}</span>
  </Link>
);
