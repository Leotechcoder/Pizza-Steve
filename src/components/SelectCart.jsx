import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';

export default function PizzaOrder() {
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [toppings, setToppings] = useState([]);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  const handleToppingChange = (topping) => {
    setToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  const sizes = ["Pequeña", "Mediana", "Grande"];
  const types = ["Completa", "Media"];
  const toppingOptions = [
    { name: "Jamón", icon: "🍖" },
    { name: "Champiñones", icon: "🍄" },
    { name: "Pimiento", icon: "🫑" },
    { name: "Cebolla", icon: "🧅" },
    { name: "Aceitunas", icon: "🫒" },
    { name: "Pepperoni", icon: "🍕" },
  ];

  return (
    <div className=" bg-light d-flex align-items-center justify-content-center p-2">
      <div className="bg-white rounded px-2 py-1 shadow w-100" style={{ maxWidth: "500px" }}>
        

        {/* Tamaño de Pizza */}
        <div className="mb-4">
          <label className="form-label">Tamaño de la Pizza</label>
          <div className="d-flex justify-content-between">
            {sizes.map((s) => (
              <button
                key={s}
                className={`btn btn-sm flex-fill mx-1 ${
                  size === s ? "btn-danger text-white" : "btn-light"
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Tipo de Pizza */}
        <div className="mb-4">
          <label className="form-label">Tipo de Pizza</label>
          <div className="position-relative">
            <button
              className="btn btn-light w-100 text-start d-flex justify-content-between align-items-center"
              onClick={() => setIsTypeOpen(!isTypeOpen)}
            >
              {type || "Selecciona el tipo"}
              <KeyboardArrowDownIcon
                className={`ms-2 transition-transform ${isTypeOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isTypeOpen && (
              <div className="position-absolute bg-white border mt-1 w-100 rounded shadow">
                {types.map((t) => (
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

        {/* Toppings */}
        <div className="mb-4">
          <label className="form-label">Toppings</label>
          <div className="row row-cols-2 g-2">
            {toppingOptions.map((topping) => (
              <div key={topping.name} className="col">
                <button
                  className={`btn w-100 text-start ${
                    toppings.includes(topping.name) ? "btn-success text-white" : "btn-light"
                  }`}
                  onClick={() => handleToppingChange(topping.name)}
                >
                  <span className="me-2">{topping.icon}</span>
                  {topping.name}
                  {toppings.includes(topping.name) && (
                    <CheckIcon className="ms-auto text-white "  />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen */}
        <div className="bg-light rounded p-3 mt-4">
          <h4 className="text-secondary">Tu Pedido:</h4>
          <p>
            <strong>Tamaño:</strong> {size || "No seleccionado"}
          </p>
          <p>
            <strong>Tipo:</strong> {type || "No seleccionado"}
          </p>
          <p>
            <strong>Toppings:</strong> {toppings.length > 0 ? toppings.join(", ") : "Ninguno"}
          </p>
        </div>
      </div>
    </div>
  );
}
