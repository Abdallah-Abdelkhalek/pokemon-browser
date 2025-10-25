import React from "react";

interface Props {
  page: number;
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationControls: React.FC<Props> = ({
  page,
  total,
  perPage,
  onPageChange,
}) => {
  const createPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (total <= 7) {
      // If few pages, show all
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    if (page <= 4) {
      // Near start
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("...");
      pages.push(total);
    } else if (page >= total - 3) {
      // Near end
      pages.push(1);
      pages.push("...");
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
      // In the middle
      pages.push(1);
      pages.push("...");
      pages.push(page - 1);
      pages.push(page);
      pages.push(page + 1);
      pages.push("...");
      pages.push(total);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      {/* Pagination buttons */}
      <div className="flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-1 bg-white rounded disabled:opacity-50 font-medium"
        >
          Previous
        </button>

        {createPageNumbers().map((p, i) =>
          typeof p === "number" ? (
            <button
              key={i}
              onClick={() => onPageChange(p)}
              className={`px-3 py-1 font-medium rounded ${
                page === p ? "bg-[#171619] text-white" : "bg-white text-black"
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={i} className="px-3 py-1">
              {p}
            </span>
          )
        )}

        <button
          disabled={page === total}
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1 bg-white rounded disabled:opacity-50 font-medium"
        >
          Next
        </button>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-600">
        Page {page} of {total} ({perPage} Pokémon shown)
      </p>
    </div>
  );
};
