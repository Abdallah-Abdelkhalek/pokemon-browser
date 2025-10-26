import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../api/pokemonApi";
import type { PokemonDetail } from "../types/pokemonDetails";

export const usePokemonDetail = (id: string) =>
  useSuspenseQuery<PokemonDetail, Error>({
    queryKey: ["pokemonDetail", id],
    queryFn: () => fetchPokemonDetail(id),
  });
