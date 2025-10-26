import React from "react";
import pokeball from "../../../Assets/pngs/pokemon-ball.png";

export const SpinnerFallback: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-sky-100 to-white dark:from-gray-900 dark:to-black">
    <img
      src={pokeball}
      alt="Loading..."
      className="animate-spin w-16 h-16 mb-4"
      style={{ animationDuration: "1s" }}
    />
    <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
      Catching Pokémon...
    </p>
  </div>
);
