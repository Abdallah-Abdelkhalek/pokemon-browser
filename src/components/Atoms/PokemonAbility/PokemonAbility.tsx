import type { PokemonAbilityType } from "../../../types/pokemonDetails";

interface PokemonAbilityProps {
  setCurrentAbilityIndex: React.Dispatch<React.SetStateAction<number>>;
  currentAbilityIndex: number;
  ability: PokemonAbilityType;
  index: number;
}
const PokemonAbility = ({
  ability,
  currentAbilityIndex,
  setCurrentAbilityIndex,
  index,
}: PokemonAbilityProps) => {
  return (
    <div className="flex items-center gap-1.5" key={ability.ability.name}>
      <span
        onClick={() => setCurrentAbilityIndex(index)}
        className={`px-3 py-1 ${
          currentAbilityIndex === index
            ? "border border-neutral-300"
            : "bg-[#f7f7f7] border border-transparent"
        }  rounded-full capitalize text-sm font-bold w-fit`}
      >
        {ability.ability.name}
      </span>
      {ability.is_hidden && (
        <span className="text-xs text-gray-500">(Hidden)</span>
      )}
    </div>
  );
};

export default PokemonAbility;
