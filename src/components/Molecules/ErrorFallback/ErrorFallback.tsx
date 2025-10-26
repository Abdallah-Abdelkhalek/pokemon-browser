import React from "react";
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center bg-linear-to-b from-red-100 to-white dark:from-red-950 dark:to-black p-6">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      alt="Pikachu"
      className="w-24 h-24 mb-4 animate-bounce"
    />
    <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
      Oops! Something went wrong.
    </h1>
    <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
      {error.message || "We couldn’t catch that Pokémon!"}
    </p>
    <div className="flex items-center gap-4">
      <a
        href="/"
        className="px-4 py-2 rounded-lg border border-red-300/50 bg-white/20 backdrop-blur-sm text-white font-medium shadow-sm transition-all duration-200 hover:bg-white/40 hover:shadow-md "
      >
        Homepage
      </a>
      <button
        onClick={resetErrorBoundary}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
      >
        Try Again
      </button>
    </div>
  </div>
);
