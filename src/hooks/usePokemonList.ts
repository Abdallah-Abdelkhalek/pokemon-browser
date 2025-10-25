import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../api/pokemonApi";

export const usePokemonList = (limit: number, offset: number) =>
  useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
  });
