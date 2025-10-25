import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBountry";
import { Spinner } from "../components/Atoms/Spinner/Spinner";
import HomePage from "../pages/HomePage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";

export const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
