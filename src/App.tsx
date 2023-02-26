import { useState } from "react";
import Cell from "./Cell";

function App() {
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handleGridClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cell = (event.target as HTMLDivElement).closest(
      ".cell"
    ) as HTMLDivElement;

    if (!cell) return;

    const row = parseInt(cell.dataset.rowIndex || "0", 10);
    const col = parseInt(cell.dataset.colIndex || "0", 10);

    if (selectedCell?.row === row && selectedCell?.col === col) {
      return;
    } else {
      setSelectedCell({ row, col });
    }
  };

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

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              data-row-index={rowIndex}
              data-col-index={colIndex}
            >
              <Cell
                isEven={isEven}
                isSelected={
                  selectedCell?.row === rowIndex &&
                  selectedCell?.col === colIndex
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
