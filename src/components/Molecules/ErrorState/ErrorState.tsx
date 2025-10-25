interface ErrorStateProps {
  onRetry: () => void;
  message?: string;
}

export const ErrorState = ({ onRetry, message }: ErrorStateProps) => (
  <div className="flex flex-col items-center gap-2 border-neutral-300 border justify-center text-center py-6 px-10 bg-white rounded-lg">
    <p className="text-red-500 mb-2 font-medium text-lg">
      {message ?? "Something went wrong."}
    </p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Retry
    </button>
  </div>
);
