import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TypeSelector({ categoria, currentOptions, type, setType, updateGlobalType }) {
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  if (categoria !== "Pizzas") return null; // Renderiza solo si la categoría es "Pizzas"

  return (
    <div className="mb-4">
      <label className="form-label">Tipo</label>
      <div className="position-relative">
        <button
          className="btn btn-light w-100 text-start d-flex justify-content-between align-items-center"
          onClick={() => setIsTypeOpen(!isTypeOpen)}
        >
          {type || "Selecciona el tipo"}
          <KeyboardArrowDownIcon
            className={`ms-2 transition-transform ${
              isTypeOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isTypeOpen && (
          <div className="position-absolute bg-white border mt-1 w-100 rounded shadow">
            {currentOptions.types.map((t) => (
              <button
                key={t}
                className="btn btn-light w-100 text-start p-2"
                onClick={() => {
                  setType(t); // Actualiza el estado local
                  updateGlobalType(t); // Actualiza el estado global
                  setIsTypeOpen(false); // Cierra el menú
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
