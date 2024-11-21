import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCount } from "../Feature/Pizzas/pizzaSlice";
import ButtonsSelectCart from "./ButtonsSelectCart";
import ToppingsSelector from "./ToppingsSelector";
import { setToppingsSelect } from "../Feature/Pizzas/pizzaSlice"; 
import TypeSelector from "./TypeSelector";
import { setTipoSelect } from "../Feature/Pizzas/pizzaSlice";


export default function SelectCart({ producto }) {
  const { categoria, nombre, id } = producto;
  
  const { count } = useSelector(store=>store.pizzas)
  const dispatch = useDispatch()
  
  // Estados
  const [size, setSize] = useState("");
  const [type, setType] = useState(nombre);
  const [toppings, setToppings] = useState([]);

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
      sizes: ["Individual", "Familiar"],
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
  // const handleToppingChange = (topping) => {
  //   setToppings((prevToppings) =>
  //     prevToppings.includes(topping)
  //       ? prevToppings.filter((t) => t !== topping)
  //       : [...prevToppings, topping]
  //   );
  // };


  const handleToppingChange = (topping) => {
    // Actualiza el estado local
    const updatedToppings = toppings.includes(topping)
      ? toppings.filter((t) => t !== topping)
      : [...toppings, topping];
  
    setToppings(updatedToppings);
  
    // Actualiza el estado global en Redux
    dispatch(
      setToppingsSelect({
        id: id, 
        toppings: updatedToppings, // Nuevos toppings seleccionados
      })
    );
  };
  

  // Manejo del tamaño y actualización de `countRef`
  const handleSize = (selectedSize) => {
    setSize(selectedSize);

    if (categoria === "Empanadas") {
      if (selectedSize === "4 Unidades") {
        dispatch(newCount(4))
      } else if (selectedSize === "1/2 Docena") {
        dispatch(newCount(6))
      } else if (selectedSize === "1 Docena") {
        dispatch(newCount(12))
      }
    }
  };

  const tamaños = currentOptions.sizes;

  const updateGlobalType = (selectedType) => {
    dispatch(
      setTipoSelect({
        id: id,
        type: selectedType, // Tipo seleccionado
      })
    );
  };
  

  return (
    <div className="bg-light vh-50 d-flex align-items-center justify-content-center p-2">
      <div
        className="bg-white rounded px-2 py-1 shadow w-100"
        style={{ maxWidth: "500px" }}
      >
        {/* Tamaño o Cantidad */}
        
       {   <ButtonsSelectCart 
                id = {id}
                tamaños={tamaños} 
                categoria={categoria}  
                handleSize={handleSize}
            />

        }

        {/* Tipo (Solo seleccionable para Pizzas) */}
        {/* {categoria === "Pizzas" && (
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
        )} */}
        
        <TypeSelector
              categoria={categoria}
              currentOptions={currentOptions}
              type={type}
              setType={setType}
              updateGlobalType={updateGlobalType}
            />





        {/* Toppings (No para Empanadas) */}
        {/* {categoria !== "Empanadas" && currentOptions.toppings.length > 0 && (
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
        )} */}

        <ToppingsSelector 
          categoria={categoria}
          currentOptions={currentOptions}
          toppings={toppings}
          handleToppings={handleToppingChange}
        />

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
              <strong>Cantidad:</strong> {count || "No seleccionado"}
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
