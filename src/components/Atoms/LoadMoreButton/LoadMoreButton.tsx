import React from "react";
import { Spinner } from "../Spinner/Spinner";

export const LoadMoreButton: React.FC<{
  onClick: () => void;
  loading: boolean;
}> = ({ onClick, loading }) => (
  <div className="flex justify-center mt-6 h-11">
    {loading ? (
      <div className="flex items-center gap-3 h-fit">
        <Spinner color="#56967d" />
        <span className="text-[#2d5847] font-medium text-lg">
          Loading more Pokemon...
        </span>
      </div>
    ) : (
      <button
        onClick={onClick}
        className="px-6 py-2 bg-[#56967d] text-white rounded-lg text-lg hover:bg-[#3a715c] disabled:opacity-50"
      >
        Load More
      </button>
    )}
  </div>
);
