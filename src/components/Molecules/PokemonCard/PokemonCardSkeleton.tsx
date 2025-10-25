import React from "react";

export const PokemonCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center animate-pulse">
    <div className="w-full aspect-square bg-gray-200 rounded-lg" />
    <div className="w-3/4 h-4 bg-gray-200 rounded mt-3" />
    <div className="w-1/2 h-3 bg-gray-200 rounded mt-2" />
  </div>
);
