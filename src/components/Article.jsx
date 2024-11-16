import { easeInOut, motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddIcon from '@mui/icons-material/Add';
import  AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH';
import { useDispatch } from 'react-redux';
import { updateProductCart } from '../Feature/Pizzas/pizzaSlice.js'
import { addMenu, calculateTotal } from '../Feature/Pizzas/menuSlice.js';
import './article.css'
import './typografy.css'
import './customwh.css'

const Article = ( { producto } ) => {

  const dispatch = useDispatch()

const { id, nombre, precio, demora, imagen } = producto; 

//abre el detalle
const handleClick = ()=>{
     dispatch(updateProductCart(producto))
}

const handleAddCart = () => {
  let count = 1
  dispatch(addMenu({id, nombre, imagen, count, precio }))
  dispatch(calculateTotal())
}


  return (
    <motion.article 
      id={id} 
      className='article custom-article'
      initial={{ opacity: 0.8, scale: 0.8 }} // Estado inicial antes de estar en vista
      whileInView={{ opacity: 1, scale: 1 }} // Estado al estar en vista al 90%
      exit={{ opacity: 0.8, scale: 0.8 }} // Estado al salir de la vista
      transition={{ duration: 0.3 }} // Duración de la animación
      viewport={{ once: false, amount: 0.85 }} // Activa whenInView cuando el 90% esté en vista
      
      >
        <div className='div-img-article custom-width-img-article'>

          <img className='img-article' src={imagen} alt="Pizza" />

        </div>
        <div className='div-description-article custom-div-description-article'>

          <div className='div-title-article '>

          <h2 className=' h2-article alegreya fs-4'>{nombre}</h2>
          </div>

          <div className='div-data-article'>
                <span 
                      className='roboto span-price-article'
                      >
                        ${precio}
                </span>
              <span className='w-50 h-100 d-flex w-50 h-100'>
                    <IconButton  color="secondary" aria-label="add an alarm">
                            <AlarmIcon />
                    </IconButton> 
                    <span className='mt-1'>
                          {demora}
                    </span>
              </span>
          </div>
          <div className='div-btn-article'>
             
              <Link onClick={handleClick} to={PATH.descripcion} className= ' btn-link-article'>
                    <AddIcon className='icon-article'/>
              </Link>
              <button className='btn-carrito-article'  onClick={handleAddCart} ><AddShoppingCart className='icon-article'/></button>
             
          </div>
          

        </div>
    </motion.article>
  )
}

export default Article
