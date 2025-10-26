import { useState } from "react";
import { useParams } from "react-router-dom";
import BoltIcon from "../../../Assets/svgs/BoltIcon";
import RulerIcon from "../../../Assets/svgs/RulerIcon";
import WeightIcon from "../../../Assets/svgs/WeightIcon";
import { usePokemonDetail } from "../../../hooks/usePokemonDetail";
import type {
  PokemonAbilityType,
  PokemonStatType,
  PokemonType,
} from "../../../types/pokemonDetails";
import PokemonStat from "../../Atoms/PokemonStat/PokemonStat";
import PokemonAbility from "../../Atoms/PokemonAbility/PokemonAbility";

export const PokemonDetailsView = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePokemonDetail(id!);
  const [currentAbilityIndex, setCurrentAbilityIndex] = useState(0);

  return (
    <div className="flex justify-center p-6 flex-col w-full h-full items-center lg:w-[900px] mx-auto transition-all duration-200">
      <div className="w-full flex flex-col items-center rounded-t-lg shadow-lg bg-linear-to-br from-purple-500 to-pink-500 text-white p-6">
        {/* Name + ID */}
        <h1 className="text-2xl font-bold capitalize mb-2 flex gap-2 items-center">
          <BoltIcon />
          {data?.name}
        </h1>
        <span className="text-sm font-normal">
          #{data?.id.toString().padStart(3, "0")}
        </span>
      </div>
      <div className="bg-white w-full max-md:flex-col rounded-b-lg shadow-lg text-black p-6 flex gap-10">
        <div className="flex flex-col w-full md:w-1/2 items-center">
          {/* Image */}
          <div className="flex justify-center mb-4 bg-[#f6f7f9] rounded-full aspect-square w-[300px] h-[300px]">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id.toString()}.png`}
              alt={data?.name ?? "Pokemon"}
              loading="lazy"
              className="w-full h-full p-6"
            />
          </div>

          {/* Type badges */}
          <div className="flex justify-center gap-2 mb-4">
            {data?.types.map((type: PokemonType) => (
              <span
                key={type.type.name}
                className="px-3 py-1 bg-[#ef4544] rounded-full text-white capitalize text-sm"
              >
                {type.type.name}
              </span>
            ))}
          </div>

          {/* Physical attributes */}
          <div className="mb-4 flex gap-2 items-center justify-center w-full mx-auto">
            <div className="bg-[#f6f7f9] min-w-[180px] max-[490px]:min-w-[50%] flex flex-col items-center justify-center h-20 rounded-md text-black">
              <div className="flex items-center gap-1 text-[#5a5c5e]">
                <RulerIcon /> Height
              </div>
              <span className="font-bold text-2xl">
                {`${data?.height !== undefined ? data.height / 10 : "-"} m`}
              </span>
            </div>
            <div className="bg-[#f6f7f9] min-w-[180px] max-[490px]:min-w-[50%] flex flex-col items-center justify-center h-20 rounded-md text-black">
              <div className="flex items-center gap-1 text-[#5a5c5e]">
                <WeightIcon /> Weight
              </div>
              <span className="font-bold text-2xl">
                {`${data?.weight !== undefined ? data.weight / 10 : "-"} kg`}
              </span>
            </div>
          </div>
        </div>
        {/* Base Stats with bars */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Base Stats</h2>
          <ul className="space-y-2 text-sm">
            {data?.stats.map((stat: PokemonStatType) => (
              <PokemonStat stat={stat} />
            ))}
          </ul>
          {/* Abilities */}
          <div className="flex md:flex-col max-md:justify-between max-md:items-center max-md:mt-2">
            <div className="my-4">
              <h2 className="text-xl font-bold mb-2">Abilities</h2>
              <div className="flex flex-col justify-start gap-2">
                {data?.abilities.map(
                  (ability: PokemonAbilityType, index: number) => (
                    <PokemonAbility
                      ability={ability}
                      index={index}
                      setCurrentAbilityIndex={setCurrentAbilityIndex}
                      currentAbilityIndex={currentAbilityIndex}
                    />
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="font-bold text-xl">Base Experience</h3>
              <h2 className="text-[#8036bf] font-bold text-2xl">
                {data?.base_experience ?? "-"} XP
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
