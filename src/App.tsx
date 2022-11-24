import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([
    { option: "Red", colorCode: "red" },
    { option: "Green", colorCode: "green" },
    { option: "White", colorCode: "white" },
  ]);
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  return (
    <div className="App">
      <div className="flex flex-col">
        <span>Choose a color:</span>
        <div className="mt-2 flex flex-row gap-4">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className={`flex flex-row items-center gap-2 ${
                selectedColorIdx === idx
                  ? "bg-stone-200 pr-3 pl-2 py-2 rounded-md border border-stone-400 shadow-md transition-colors"
                  : "transition-none"
              }`}
            >
              <div
                className={`w-6 h-6 shadow-md rounded-full ${
                  selectedColorIdx !== idx
                    ? "hover:cursor-pointer hover:scale-125 shadow-lg border border-stone-500 transition-all"
                    : "transition-none"
                }`}
                style={{ backgroundColor: color.colorCode }}
                onClick={() => setSelectedColorIdx(idx)}
              ></div>
              {selectedColorIdx === idx ? (
                <span className="text-sm font-light">{color.option}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
