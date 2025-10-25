import React, { useState } from "react";
import { usePokemonList } from "../../../hooks/usePokemonList";
import { LoadMoreButton } from "../../Atoms/LoadMoreButton/LoadMoreButton";
import { PokemonCard } from "../../Molecules/PokemonCard/PokemonCard";
import { PokemonCardSkeleton } from "../../Molecules/PokemonCard/PokemonCardSkeleton";

export const LoadMoreView = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const { data, isFetching } = usePokemonList(limit, offset);

  const [pokemonList, setPokemonList] = useState<any[]>([]);

  React.useEffect(() => {
    if (data?.results) {
      setPokemonList((prev) => [
        ...new Map(
          [...prev, ...data.results].map((pokemon) => [pokemon.name, pokemon])
        ).values(),
      ]);
    }
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[1250px] mx-auto">
        {pokemonList.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          return isFetching && pokemonList.length === 0 ? (
            <PokemonCardSkeleton key={pokemon.name} />
          ) : (
            <PokemonCard
              id={pokemonId}
              key={pokemon.name}
              name={pokemon.name}
            />
          );
        })}
      </div>
      {pokemonList.length < (data?.count ?? 500) && (
        <LoadMoreButton
          loading={isFetching}
          onClick={() => setOffset((prev) => prev + limit)}
        />
      )}
      <span className="flex justify-center mt-4 text-lg text-[#2d5847] font-medium">
        Showing {pokemonList.length}{" "}
        {pokemonList.length === 1 ? "Pokemon" : "Pokemons"}
      </span>
    </>
  );
};
