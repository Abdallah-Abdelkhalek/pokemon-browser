import type { PokemonStatType } from "../../../types/pokemonDetails";

interface PokemonStatProps {
  stat: PokemonStatType;
}
// pick a max value for scaling bars (Pokémon stats usually cap ~255)
const MAX_STAT = 255;

const PokemonStat = ({ stat }: PokemonStatProps) => {
  return (
    <ul className="space-y-2 text-sm">
      <li key={stat.stat.name} className="capitalize">
        <div className="flex justify-between mb-1 font-medium">
          <span>{stat.stat.name}</span>
          <span className="text-[#5f6163]">{stat.base_stat}</span>
        </div>
        <div className="w-full bg-[#f4f4f4] rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{
              width: `${(stat.base_stat / MAX_STAT) * 100}%`,
            }}
          />
        </div>
      </li>
    </ul>
  );
};

export default PokemonStat;
