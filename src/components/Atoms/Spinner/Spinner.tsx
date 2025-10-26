interface SpinnerProps {
  color?: string;
  showBall?: boolean;
}
import Pokeball from "../../../Assets/pngs/pokemon-ball.png";

export const Spinner = ({ color, showBall = false }: SpinnerProps) => {
  const spinnerColor = color || "#3b82f6";
  return (
    <div className="flex justify-center items-center h-10">
      {showBall ? (
        <img
          src={Pokeball}
          alt="Loading..."
          className="animate-spin w-16 h-16 mb-4"
          style={{ animationDuration: "1s" }}
        />
      ) : (
        <div
          className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderColor: `${spinnerColor} transparent ${spinnerColor} ${spinnerColor}`,
          }}
        ></div>
      )}
    </div>
  );
};
