import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

import { Link } from "react-router-dom";
import { PATH } from "../Routes/PATH";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLike } from "../Feature/Pizzas/pizzaSlice";
import { addMenu, calculateTotal } from "../Feature/Pizzas/menuSlice";

import Counter from "./Counter"
import SelectCart from "../components/SelectCart2";
import "../components/typografy.css";

const Description = ({ setDescription }) => {
  const dispatch = useDispatch();

  // Selección del estado desde Redux
  const like = useSelector((store) => store.pizzas.like);
  const producto = useSelector(
    (store) => store.pizzas.productCart
  );

  const { id, nombre, precio, imagen, categoria } = producto;
  // Estado local para controlar la cantidad seleccionada
  const [count, setCount] = useState(1);
  const countRef = useRef(0);

  // Función para manejar el botón "Agregar al carrito"
  const handleAddCart = () => {
    dispatch(addMenu({ id, nombre, precio, imagen, categoria, count }));
    dispatch(calculateTotal());
    setDescription(false);
  };

  // Funciones para incrementar y decrementar la cantidad
  const addHandleClick = () => setCount(countRef.current + 1);
  const subHandleClick = () => {
    if (countRef.current > 1) setCount(countRef.current - 1);
  };

  // Cálculo del precio total según la cantidad seleccionada
  const price = precio * count;

  // Función para manejar el "Like"
  const handleLike = () => {
    dispatch(updateLike(!like));
  };

  // Título dinámico según la categoría
  const getCategoryTitle = () => {
    switch (categoria) {
      case "Pizzas":
        return "Arma tu Pizza";
      case "Empanadas":
        return "Elige tus Empanadas";
      case "Hamburguesas":
        return "Personaliza tu Hamburguesa";
      case "Lomos":
        return "Diseña tu Lomo";
      default:
        return "Arma tu Pedido";
    }
  };

  const handleBack = ()=>{
    setDescription(false)
  }


  return (
    <>
      <div className="d-flex flex-column div-master-sec-carta">
        {/* Encabezado */}
        <div className="d-flex justify-content-between mt-3">
          {window.innerWidth <= 920 ? 
          (<Link
            to={PATH.inicio}
            className="ms-3 btn btn-back buttons-description"
          >
            <ArrowBackIosNewIcon />
          </Link>)
          :(<button 
          onClick={handleBack}
          className="ms-3 btn btn-back buttons-description">
                  <ArrowBackIosNewIcon />
          </button>)}
          
          <h2 className="text-center mb-4 text-primary fs-5">{getCategoryTitle()}</h2>
          <button
            onClick={handleLike}
            className="me-3 btn btn-back buttons-description"
          >
            {like ? (
              <FavoriteIcon className="btn-like-dark" />
            ) : (
              <FavoriteIcon className="btn-like-white" />
            )}
          </button>
        </div>

        {/* Descripción del producto */}
        <div className="container-description d-flex flex-column justify-content-center text-center">
          {categoria === 'Empanadas' ? 
          <h1 className="fs-5 mt-4">{categoria} de {nombre}</h1> :
          
          categoria === 'Pizzas' ? 
          <h1 className="fs-5 mt-4">Pizza {nombre}</h1> :

          categoria === 'Hamburguesas'?
          <h1 className="fs-5 mt-4">Hamburguesa {nombre}</h1> :

          <h1 className="fs-5 mt-4">Lomo {nombre}</h1>
          }
          
          <img className="img-pizza" src={imagen} alt={nombre} />
        </div>

        {/* Componente de selección (si aplica) */}
        <SelectCart producto={producto} countRef={countRef}/>

        {/* Contador de cantidad */}
        <Counter subHandleClick={subHandleClick} countRef={countRef.current} addHandleClick={addHandleClick}/>

        {/* Precio total y botón "Agregar al carrito" */}
        <div className=" d-flex justify-content-between p-2 mb-3">
          <span className="ms-5 span-price roboto">${price}</span>
          <Link className="link-cart me-5" to={PATH.carta}>
            <button className="btn-carrito me-5" onClick={handleAddCart}>
              <AddShoppingCart className="add-cart" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Description;
