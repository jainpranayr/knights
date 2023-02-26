import { KnightIcon } from "./icons";
import { classNames } from "./utils";

function Cell({
  isEven,
  isSelected,
  isCapturable,
}: {
  isEven: boolean;
  isSelected: boolean;
  isCapturable: boolean;
}) {
  return (
    <div
      className={classNames(
        isEven ? "bg-white" : "bg-gray-500",
        "flex h-10 w-10 items-center justify-center md:h-12 md:w-12"
      )}
    >
      {isSelected ? (
        <KnightIcon
          className={classNames(
            isEven ? "text-black" : "text-white",
            "h-7 w-7"
          )}
        />
      ) : null}

      {isCapturable ? (
        <span className="h-4 w-4 rounded-full border-l-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md" />
      ) : null}
    </div>
  );
}

export default Cell;
