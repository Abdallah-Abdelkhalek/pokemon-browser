import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../api/pokemonApi";
import type { PokemonDetail } from "../types/pokemonDetails";

export const usePokemonDetail = (id: string) =>
  useQuery<PokemonDetail, Error>({
    queryKey: ["pokemonDetail", id],
    queryFn: () => fetchPokemonDetail(id),
    enabled: !!id,
  });
