import { useEffect, useState, Suspense } from "react";
import { PaginationControls } from "../../Atoms/PaginationControl/PaginationControl";
import { PokemonCard } from "../../Molecules/PokemonCard/PokemonCard";
import { Spinner } from "../../Atoms/Spinner/Spinner";
import { usePokemonList } from "../../../hooks/usePokemonList";
import { ErrorState } from "../../Molecules/ErrorState/ErrorState";
import GridDisplay from "../../Molecules/GridDisplay/GridDisplay";
import type { PokemonListItem } from "../../../types/pokemonLists";
import Centered from "../../Atoms/Centered/Centered";

export const PaginationView = () => {
  const [page, setPage] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const limit = 20;
  const offset = (page - 1) * limit;
  const total = 66;

  const { data, isError, isFetching, isLoading, refetch } = usePokemonList(
    limit,
    offset
  );

  const loading = isLoading || isFetching;

  // Trigger animation only after the first load
  useEffect(() => {
    if (!isLoading && !isFetching) {
      setShouldAnimate(true);
    }
  }, [page, isLoading, isFetching]);

  const renderContent = () => {
    if (loading || isError)
      return (
        <Centered>
          {loading ? (
            <Spinner color="#000000" />
          ) : (
            <ErrorState
              message="Failed to load Pokémon cards"
              onRetry={refetch}
            />
          )}
        </Centered>
      );
    if (data)
      return (
        <Suspense fallback={<Spinner />}>
          <div
            className={`transition-all duration-300 ${
              shouldAnimate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <GridDisplay>
              {data.results.map((pokemon: PokemonListItem) => (
                <PokemonCard
                  id={Number(pokemon.url.split("/")[6])}
                  key={pokemon.name}
                  name={pokemon.name}
                />
              ))}
            </GridDisplay>
          </div>
        </Suspense>
      );
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">{renderContent()}</div>

      {/* Show pagination only if data exists or during loading */}
      {(data || loading) && (
        <div className="mt-auto">
          <PaginationControls
            perPage={limit}
            page={page}
            total={total}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};
