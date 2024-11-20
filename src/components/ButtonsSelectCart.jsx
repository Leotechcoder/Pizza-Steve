import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setTamaño } from "../Feature/Pizzas/pizzaSlice";

const ButtonsSelectCart = ({ categoria, tamaños, handleSize }) => {
  const dispatch = useDispatch();
  const { display } = useSelector((store) => store.pizzas);

  // Estado local para rastrear el tamaño seleccionado
  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (tamaño) => {
    // Cambiamos el tamaño seleccionado solo si el botón ya no está seleccionado
    setSelectedSize((prevSize) => (prevSize === tamaño ? null : tamaño));
    handleSize(tamaño)
    dispatch(setTamaño(tamaño)); // Alternamos el valor de display
  };

  useEffect(() => {
    if(categoria === 'Empanadas'){

      if( selectedSize !== null){
        setSelectedSize(null);
      }
    }
   
  }, [display])
  

  return (
    <div className="mb-4">
      {/* Etiqueta dinámica */}
      <label className="form-label">
        {categoria === "Empanadas" ? "Cantidad" : "Tamaño"}
      </label>

      {/* Contenedor de botones */}
      <div className="d-flex justify-content-evenly">
        {tamaños.map((tamaño) => (
          <button
            key={tamaño}
            className={`btn btn-sm flex-fill mx-1 ${
              
              selectedSize === tamaño ? "btn-danger text-white" : "btn-light"
            }`}
            onClick={() => handleButtonClick(tamaño)}
          >
            {tamaño}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsSelectCart;
