import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import { PATH } from "../Routes/PATH";
import{ motion } from "framer-motion"

import { useDispatch, useSelector } from "react-redux";
import { newCount, newvisual, updateLike } from "../Feature/Pizzas/pizzaSlice";

import Counter from "./Counter"
import SelectCart from "../components/SelectCart2";
import AddCart from "./AddCart";
import { useEffect } from "react";
import "../components/typografy.css";

const Description = () => {
  
  // Selección del estado desde Redux
  const like = useSelector((store) => store.pizzas.like);
  const producto = useSelector(
    (store) => store.pizzas.productCart
  );
  const { tamaño } = useSelector(store=>store.pizzas)
  const dispatch = useDispatch();

  const { id, nombre, imagen, categoria } = producto;


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
    dispatch(newvisual(false))
  }

  useEffect(() => {
   dispatch(newCount(1))
  }, [producto])
  


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
            <ArrowBackIosNewIcon className="svg-icon"/>
          </Link>)
          :(<button 
          onClick={handleBack}
          className="ms-3 btn btn-back buttons-description">
                  <ArrowBackIosNewIcon className="svg-icon"/>
          </button>)}
          
          <h2 className="text-center mb-4 text-primary fs-6">{getCategoryTitle()}</h2>
          <button
            onClick={handleLike}
            className="me-3 btn btn-back buttons-description"
          >
            {like ? (
              <FavoriteIcon className="btn-like-dark svg-icon"/>
            ) : (
              <FavoriteIcon className="btn-like-white svg-icon" />
            )}
          </button>
        </div>

        {/* Descripción del producto */}
        <div className="container-description d-flex flex-column justify-content-center text-center">
          {categoria === 'Empanadas' ? 
          <h1 className="fs-6 my-4">{categoria} de {nombre}</h1> :
          
          categoria === 'Pizzas' ? 
          <h1 className="fs-5 my-4">Pizza {nombre}</h1> :

          categoria === 'Hamburguesas'?
          <h1 className="fs-5 my-4">Hamburguesa {nombre}</h1> :

          <h1 className="fs-5 my-4">Lomo {nombre}</h1>
          }
          {categoria === 'Pizzas'? tamaño === 'Pequeña'? 
                  <motion.img
                  initial={{ scale: 1, rotate: 0 }}
                  animate={{ scale: 0.7, rotate: -180 }} 
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="img-pizza"
                  src={imagen}
                  alt={nombre}
                />
                  :
                  tamaño === 'Mediana'?
                  <motion.img
                        initial={{ scale: 0.7, rotate: -180 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ scale: 0.9, rotate: 0 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  :
                  <motion.img
                        initial={{ scale: 1, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ scale: 1.1, rotate: 180 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.5, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  : categoria === 'Hamburguesas'? tamaño === 'Individual'?
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 0.85, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  :
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 1.1, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  : categoria === 'Empanadas'?
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: -180 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 0.8, rotate: 0 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.2, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  : categoria === 'Lomos'? tamaño === 'Individual'? 
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 0.85, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  : tamaño === 'Familiar'? 
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 1.1, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  :
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                  :
                  <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 0 }} /* La imagen comienza más pequeña y totalmente transparente */
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}  /* La imagen escala a su tamaño normal y se vuelve completamente visible */
                        transition={{ duration: 0.3, ease: "easeOut" }} /* Ajuste del tiempo y suavidad de la animación */
                        className="img-pizza"
                        src={imagen}
                        alt={nombre}
                      />
                }
          
        </div>

        {/* Componente de selección (si aplica) */}
        <SelectCart producto={producto}/>

        {/* Contador de cantidad */}
        <Counter/>
        
        {/* Precio total y botón "Agregar al carrito" */}
        <AddCart/>
        
      </div>
    </>
  );
};

export default Description;
