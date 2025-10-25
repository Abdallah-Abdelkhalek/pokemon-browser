import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../api/pokemonApi";

export const usePokemonDetail = (id: string) =>
  useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => fetchPokemonDetail(id),
  });
