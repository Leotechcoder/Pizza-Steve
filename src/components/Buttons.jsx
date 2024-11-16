import { useDispatch, useSelector } from "react-redux";
import { selectedCarta } from "../Feature/Pizzas/pizzaSlice";
import { useState } from "react";
import "../Pages/carta.css";
import "./buttons.css"

const Buttons = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const Productos = useSelector((state) => state.pizzas.list); // Productos en Redux
  const dispatch = useDispatch();

  const categorias = ["All", "Pizzas", "Hamburguesas", "Empanadas", "Lomos"]; // Categorías a mostrar

  const handleClick = (categoria) => {
    setActiveCategory(categoria);
    if (categoria === "All") {
      // Si se selecciona "All", muestra todos los productos
      dispatch(selectedCarta(Productos));
    } else {
      // Filtra por la categoría seleccionada
      dispatch(
        selectedCarta(
          Productos.filter((producto) =>
            producto.categoria.toLowerCase().includes(categoria.toLowerCase())
          )
        )
      );
    }
  };




  return (

            <div className="d-flex gap-3 container-buttons px-4 d-lg-none">
              {/* Botones dinámicos */}
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => handleClick(categoria)}
                  type="button"
                  className={`btn btn-desactive ${activeCategory === categoria ? "active" : ""}`}
                >
                  {categoria}
                </button>
              ))}
            </div>
    
  );
};

export default Buttons;

