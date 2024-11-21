import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setTamaño } from "../Feature/Pizzas/pizzaSlice";
import { toggleDisplay } from "../Feature/Pizzas/pizzaSlice";


const ButtonsSelectCart = ({ id, categoria, tamaños, handleSize }) => {
  const dispatch = useDispatch();
  const { display } = useSelector((store) => store.pizzas);
  const size = useSelector((store) => store.pizzas.tamaño);


  // Estado local para rastrear el tamaño seleccionado
  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (tamaño) => {
    dispatch(toggleDisplay(true))
    // Cambiamos el tamaño seleccionado solo si el botón ya no está seleccionado
    setSelectedSize((prevSize) => (prevSize === tamaño ? null : tamaño));
    handleSize(tamaño)
    dispatch(setTamaño({
      id: id, 
      tamaño: tamaño,
      })); 
  };

  // useEffect para sincronizar el tamaño seleccionado basado en el estado global
  useEffect(() => {
    // Si el id coincide con el tamaño.id en el estado global, actualiza selectedSize
    if (size?.id === id) {
      setSelectedSize(size.tamaño); // Actualiza el tamaño seleccionado
    } else{
      setSelectedSize(null); // Reinicia si no hay coincidencia
    }if(!display){
      if(categoria === 'Empanadas'){

        setSelectedSize(null);
      }
    }
  }, [size, id, display]);
  

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
            className={`col-2 text-center btn btn-sm flex-fill mx-1 ${
              
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
