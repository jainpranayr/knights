import { useCallback, useState } from "react";
import Cell from "./Cell";
import { KnightIcon } from "./icons";
import { classNames } from "./utils";

type Cell = {
  row: number;
  col: number;
};

const POSSIBLE_MOVES = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];

function App() {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [capturableCells, setCapturableCells] = useState<Cell[]>([]);

  const handleGridClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cell = (event.target as HTMLDivElement).closest(
      ".cell"
    ) as HTMLDivElement;

    if (!cell) return;

    const row = parseInt(cell.dataset.rowIndex || "0", 10);
    const col = parseInt(cell.dataset.colIndex || "0", 10);

    if (selectedCell?.row === row && selectedCell?.col === col) {
      return;
    }

    handleSelect(row, col);
  };

  const handleSelect = useCallback((row: number, col: number) => {
    const capturable: Cell[] = POSSIBLE_MOVES.reduce(
      (acc: Cell[], [moveX, moveY]) =>
        row + moveX >= 0 &&
        row + moveX < 8 &&
        col + moveY >= 0 &&
        col + moveY < 8
          ? [...acc, { row: row + moveX, col: col + moveY }]
          : [...acc],
      []
    );

    setSelectedCell({ row, col });
    setCapturableCells(capturable);
  }, []);

  return (
    <div className="container mx-auto grid h-screen place-content-center bg-gray-50">
      <div
        className="grid-rows-8 grid h-full w-full grid-cols-8 border-2 border-gray-500 shadow-md"
        onClick={handleGridClick}
      >
        {Array.from({ length: 64 }, (_, index) => {
          const rowIndex = Math.floor(index / 8);
          const colIndex = index % 8;

          const isEven = (rowIndex + colIndex) % 2 === 0;
          const isSelected =
            selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
          const isCapturable = capturableCells.some(
            (cell) => cell.row === rowIndex && cell.col === colIndex
          );

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              data-row-index={rowIndex}
              data-col-index={colIndex}
            >
              <Cell
                isEven={isEven}
                isSelected={isSelected}
                isCapturable={isCapturable}
              />
            </div>
          );
        })}
      </div>

      <div className="my-6 flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2">
          <KnightIcon className="h-7 w-7 text-black" />
          <p>- Knight's Position</p>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="h-4 w-4 rounded-full border-l-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md" />
          <p>- Possible Moves</p>
        </div>
      </div>
    </div>
  );
}

export default App;
