interface SpinnerProps {
  color?: string;
}

export const Spinner = ({ color }: SpinnerProps) => {
  const spinnerColor = color || "#3b82f6";

  return (
    <div className="flex justify-center items-center h-10">
      <div
        className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
        style={{
          borderColor: `${spinnerColor} transparent ${spinnerColor} ${spinnerColor}`,
        }}
      ></div>
    </div>
  );
};
