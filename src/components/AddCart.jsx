import { Link } from "react-router-dom";
import { PATH } from "../Routes/PATH";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../Feature/Pizzas/menuSlice";
import { newvisual } from "../Feature/Pizzas/pizzaSlice"
import { calculateTotal } from "../Feature/Pizzas/menuSlice";
import { useState, useEffect } from "react";

const AddCart = () => {
  // Obtener producto y count del store
  const { productCart, count, tamaño, tipoSelect, toppingsSelect } = useSelector(store => store.pizzas);
  const { id, nombre, precio, imagen, categoria } = productCart;

  const dispatch = useDispatch();

  // Estado para el ancho de la ventana
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  // Listener para actualizar el estado al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Función para manejar el botón "Agregar al carrito"
  const handleAddCart = () => {
    dispatch(addMenu({ id, nombre, precio, imagen, categoria, count, tamaño, tipoSelect, toppingsSelect }));
    dispatch(calculateTotal());
    dispatch(newvisual(false));
  };

  // Botón genérico
  const renderButton = () => (
    <button className="btn-carrito" onClick={handleAddCart}>
      <AddShoppingCart className="add-cart" />
    </button>
  );

  return (
    <div className="w-100 d-flex justify-content-center gap-5 mb-3">
      {/* Precio total */}
      <span className=" span-price roboto">${precio * count}</span>

      {/* Botón "Agregar al carrito" */}
      {isMobile ? (
        <Link className="link-cart" to={PATH.inicio}>
          {renderButton()}
        </Link>
      ) : (
        <span className="link-cart">{renderButton()}</span>
      )}
    </div>
  );
};

export default AddCart;
