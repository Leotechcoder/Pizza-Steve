import { motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import  AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH';
import { useDispatch } from 'react-redux';
import { newvisual, updateProductCart } from '../Feature/Pizzas/pizzaSlice.js'
import './article.css'
import './typografy.css'
import './customwh.css'

const Article = ( { producto } ) => {

  const dispatch = useDispatch()

const { id, nombre, precio, demora, imagen, categoria, descripcion } = producto; 

//abre el detalle
const handleClick = ()=>{
  if(window.innerWidth >= 980){

    dispatch(updateProductCart(producto))
    dispatch(newvisual(true))
  }else{
    dispatch(updateProductCart(producto))
  }
}


  return (
    <Link onClick={handleClick} to={PATH.descripcion} className= ' btn-link-article'>
    <motion.article 
      id={id} 
      className='article custom-article'
      initial={{ opacity: 0.8, scale: 0.85 }} // Estado inicial antes de estar en vista
      whileInView={{ opacity: 1, scale: 0.95 }} // Estado al estar en vista al 90%
      exit={{ opacity: 0.8, scale: 0.85 }} // Estado al salir de la vista
      transition={{ type: 'tween', duration: 0.3 }} // Duración de la animación
      viewport={{ once: false, amount: 0.85 }} // Activa whenInView cuando el 90% esté en vista
      
      >
        <div className='custom-width-img-article'>

          <div className='div-title-article '>

            {categoria === 'Pizzas' ? 
                <h2 className=' h2-article alegreya'>Pizza {nombre}</h2>
                :
                categoria === 'Hamburguesas'?
                <h2 className=' h2-article alegreya'>Hamburguesa {nombre}</h2>
                :
                categoria === 'Empanadas'?
                <h2 className=' h2-article alegreya'>Empanadas de {nombre}</h2>
                :
                <h2 className=' h2-article alegreya'>Lomo {nombre}</h2>
                
              }
          </div>

          <img className='img-article' src={imagen} alt={categoria} />

        </div>


        <div className='div-description-article custom-div-description-article'>

          
          <div className='div-article-description'>
             <p>{descripcion}</p>
          </div>
          <div className='div-data-article'>
              <span className='span-alarm-art'>
                    <IconButton  color="secondary" aria-label="add an alarm">
                            <AlarmIcon className="icon-alarm"/>
                    </IconButton> 
                    <span className=''>
                          {demora}
                    </span>
              </span>
                <span 
                      className='span-price-article'
                      >
                        ${precio}
                </span>
          </div>

                {/* {window.innerWidth>=980 ? 
              <button onClick={handleClick} className= ' btn-link-article'>
              <AddShoppingCart className='icon-article'/>
              </button>
              :

                  
              } */}
                
              {/* <button className='btn-carrito-article'  onClick={handleAddCart} ><AddShoppingCart className='icon-article'/></button> */}
             
          
          
          </div>
          </motion.article>
          </Link>
  )
}

export default Article
