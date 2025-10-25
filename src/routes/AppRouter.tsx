import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBountry";
import { Spinner } from "../components/Atoms/Spinner/Spinner";
import { PokemonDetails } from "../components/Organism/PokemonDetailsView/PokemonDetailsView";
import HomePage from "../pages/HomePage";

export const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
