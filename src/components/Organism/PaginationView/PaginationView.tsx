import { useState, Suspense } from "react";
import { PaginationControls } from "../../Atoms/PaginationControl/PaginationControl";
import { PokemonCard } from "../../Molecules/PokemonCard/PokemonCard";
import { Spinner } from "../../Atoms/Spinner/Spinner";
import { usePokemonList } from "../../../hooks/usePokemonList";
import { ErrorState } from "../../Molecules/ErrorState/ErrorState";
import GridDisplay from "../../Molecules/GridDisplay/GridDisplay";

export const PaginationView = () => {
  const [page, setPage] = useState(1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const { data, isError, isLoading, refetch } = usePokemonList(limit, offset);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorState onRetry={refetch} />;

  const total = 660;

  return (
    <Suspense fallback={<Spinner />}>
      <GridDisplay>
        {data.results.map((pokemon: any) => (
          <PokemonCard
            id={pokemon.url.split("/")[6]}
            key={pokemon.name}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              pokemon.url.split("/")[6]
            }.png`}
          />
        ))}
      </GridDisplay>
      <PaginationControls
        perPage={limit}
        page={page}
        total={total}
        onPageChange={setPage}
      />
    </Suspense>
  );
};
