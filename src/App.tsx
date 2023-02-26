import { useState } from "react";
import Cell from "./Cell";

function App() {
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handleSelectCell = (row: number, col: number) => {
    if (selectedCell?.row === row && selectedCell?.col === col) {
      setSelectedCell(null);
    } else {
      setSelectedCell({ row, col });
    }
  };

  return (
    <div className="container mx-auto grid h-screen place-content-center bg-gray-50">
      <div className="grid-rows-8 grid h-full w-full grid-cols-8 border-2 border-gray-500 shadow-md">
        {Array.from({ length: 64 }, (_, index) => {
          const rowIndex = Math.floor(index / 8);
          const colIndex = index % 8;
          const isEven = (rowIndex + colIndex) % 2 === 0;

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleSelectCell(rowIndex, colIndex)}
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
