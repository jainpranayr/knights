import { classNames } from "./utils";

function Cell({ isEven }: { isEven: boolean }) {
  return (
    <div
      className={classNames(
        isEven ? "bg-white" : "bg-gray-500",
        "items-center` flex h-10 w-10  justify-center md:h-12 md:w-12"
      )}
    />
  );
}

export default Cell;
