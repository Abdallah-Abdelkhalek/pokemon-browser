import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PaginationView } from "../pages/PaginationView";
import { ErrorBoundary } from "./ErrorBountry";
import { Spinner } from "../components/Atoms/Spinner/Spinner";

export const AppRouter = () => (
  <BrowserRouter>
    <nav className="p-4 bg-blue-600 text-white flex justify-center gap-4">
      <Link to="/">Pagination</Link>
      <Link to="/load-more">Load More</Link>
    </nav>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<PaginationView />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
