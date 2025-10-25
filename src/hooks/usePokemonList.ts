import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../api/pokemonApi";
import type { PokemonList } from "../types/pokemon";

export const usePokemonList = (limit: number, offset: number) =>
  useQuery<PokemonList>({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
  });
