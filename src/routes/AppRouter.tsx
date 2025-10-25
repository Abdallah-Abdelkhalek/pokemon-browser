import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <nav className="p-4 bg-blue-600 text-white flex justify-center gap-4">
      <Link to="/">Pagination</Link>
      <Link to="/load-more">Load More</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/load-more" element={<div>Load More page</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
