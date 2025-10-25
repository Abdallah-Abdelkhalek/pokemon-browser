export const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="flex flex-col items-center justify-center text-center p-6">
    <p className="text-red-500 mb-2">Something went wrong.</p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Retry
    </button>
  </div>
);
