import { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

export default function SelectCart({ producto, countRef }) {
  const { categoria, nombre } = producto;


  // Estados
  const [size, setSize] = useState("");
  const [type, setType] = useState(nombre);
  const [toppings, setToppings] = useState([]);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  // Opciones según categoría
  const options = {
    Pizzas: {
      sizes: ["Pequeña", "Mediana", "Grande"],
      types: ["Completa", "Media"],
      toppings: [
        { name: "Jamón", icon: "🍖" },
        { name: "Champiñones", icon: "🍄" },
        { name: "Pimiento", icon: "🫑" },
        { name: "Cebolla", icon: "🧅" },
        { name: "Aceitunas", icon: "🫒" },
        { name: "Pepperoni", icon: "🍕" },
      ],
    },
    Empanadas: {
      sizes: ["4 Unidades", "1/2 Docena", "1 Docena"],
      types: [nombre],
      toppings: [],
    },
    Hamburguesas: {
      sizes: ["Simple", "Doble", "Triple"],
      types: [nombre],
      toppings: [
        { name: "Queso", icon: "🧀" },
        { name: "Bacon", icon: "🥓" },
        { name: "Lechuga", icon: "🥬" },
        { name: "Tomate", icon: "🍅" },
      ],
    },
    Lomos: {
      sizes: ["Individual", "Familiar"],
      types: [nombre],
      toppings: [
        { name: "Huevo", icon: "🥚" },
        { name: "Jamón", icon: "🍖" },
        { name: "Pimientos", icon: "🫑" },
      ],
    },
  };

  const currentOptions = options[categoria] || {
    sizes: [],
    types: [],
    toppings: [],
  };

  // useEffect para inicializar valores
  useEffect(() => {
    if (categoria === "Pizzas") {
      setType(""); // Tipo predeterminado basado en el nombre del producto
      setSize(""); // Reiniciar tamaño
      setToppings([]); // Limpiar toppings
    } else {
      setType(nombre); // Tipo predeterminado basado en el nombre del producto
      setSize(""); // Reiniciar tamaño
      setToppings([]); // Limpiar toppings
    }
  }, [producto]);

  // Manejo de toppings
  const handleToppingChange = (topping) => {
    setToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  // Manejo del tamaño y actualización de `countRef`
  const handleSize = (selectedSize) => {
    setSize(selectedSize);

    if (categoria === "Empanadas") {
      if (selectedSize === "4 Unidades") {
        countRef.current = 4;
      } else if (selectedSize === "1/2 Docena") {
        countRef.current = 6;
      } else if (selectedSize === "1 Docena") {
        countRef.current = 12;
      }
    }
  };

  return (
    <div className="bg-light vh-50 d-flex align-items-center justify-content-center p-2">
      <div
        className="bg-white rounded px-2 py-1 shadow w-100"
        style={{ maxWidth: "500px" }}
      >
        {/* Tamaño o Cantidad */}
        <div className="mb-4">
          <label className="form-label">
            {categoria === "Empanadas" ? "Cantidad" : "Tamaño"}
          </label>
          <div className="d-flex justify-content-between">
            {currentOptions.sizes.map((s) => (
              <button
                key={s}
                className={`btn btn-sm flex-fill mx-1 ${
                  size === s ? "btn-danger text-white" : "btn-light"
                }`}
                onClick={() => handleSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Tipo (Solo seleccionable para Pizzas) */}
        {categoria === "Pizzas" && (
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
                        setType(t);
                        setIsTypeOpen(false);
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Toppings (No para Empanadas) */}
        {categoria !== "Empanadas" && currentOptions.toppings.length > 0 && (
          <div className="mb-4">
            <label className="form-label">Toppings</label>
            <div className="row row-cols-2 g-2">
              {currentOptions.toppings.map((topping) => (
                <div key={topping.name} className="col">
                  <button
                    className={`btn w-100 text-start ${
                      toppings.includes(topping.name)
                        ? "btn-success text-white"
                        : "btn-light"
                    }`}
                    onClick={() => handleToppingChange(topping.name)}
                  >
                    <span className="me-2">{topping.icon}</span>
                    {topping.name}
                    {toppings.includes(topping.name) && (
                      <CheckIcon className="ms-auto text-white" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resumen */}
        <div className="bg-light rounded p-3 mt-4">
          <h4 className="text-secondary">Tu Pedido:</h4>
          <p>
            <strong>Categoría:</strong> {categoria}
          </p>
          <p>
            <strong>Tipo:</strong> {type || "No seleccionado"}
          </p>
          {categoria === "Empanadas" ? (
            <p>
              <strong>Cantidad:</strong> {countRef.current || "No seleccionado"}
            </p>
          ) : (
            <p>
              <strong>Tamaño:</strong> {size || "No seleccionado"}
            </p>
          )}
          {categoria !== "Empanadas" && (
            <p>
              <strong>Toppings:</strong>{" "}
              {toppings.length > 0 ? toppings.join(", ") : "Ninguno"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
