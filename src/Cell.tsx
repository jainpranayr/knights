import { KnightIcon } from "./icons";
import { classNames } from "./utils";

function Cell({
  isEven,
  isSelected,
}: {
  isEven: boolean;
  isSelected: boolean;
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
    </div>
  );
}

export default Cell;
