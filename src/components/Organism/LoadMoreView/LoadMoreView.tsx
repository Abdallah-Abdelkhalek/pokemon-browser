import React, { useState } from "react";
import { usePokemonList } from "../../../hooks/usePokemonList";
import { LoadMoreButton } from "../../Atoms/LoadMoreButton/LoadMoreButton";
import { PokemonCard } from "../../Molecules/PokemonCard/PokemonCard";
import { PokemonCardSkeleton } from "../../Molecules/PokemonCard/PokemonCardSkeleton";
import type { PokemonListItem } from "../../../types/pokemonLists";
import { ErrorState } from "../../Molecules/ErrorState/ErrorState";
import Centered from "../../Atoms/Centered/Centered";
import GridDisplay from "../../Molecules/GridDisplay/GridDisplay";

export const LoadMoreView = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const { data, isFetching, isError, refetch } = usePokemonList(limit, offset);

  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);

  React.useEffect(() => {
    if (data?.results) {
      setPokemonList((prev) => [
        ...new Map(
          [...prev, ...data.results].map((pokemon) => [pokemon.name, pokemon])
        ).values(),
      ]);
    }
  }, [data]);

  if ((isError || isFetching) && pokemonList.length === 0)
    return (
      <Centered>
        {isError ? (
          <ErrorState onRetry={refetch} />
        ) : (
          <LoadMoreButton loading={isFetching} onClick={() => {}} />
        )}
      </Centered>
    );

  return (
    <>
      <GridDisplay>
        {pokemonList.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          return isFetching && pokemonList.length === 0 ? (
            <PokemonCardSkeleton key={pokemon.name} />
          ) : (
            <PokemonCard
              id={Number(pokemonId)}
              key={pokemon.name}
              name={pokemon.name}
            />
          );
        })}
      </GridDisplay>
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
