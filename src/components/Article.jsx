import { motion } from "framer-motion";
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import  AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH';
import { useDispatch } from 'react-redux';
import { updateProductCart } from '../Feature/Pizzas/pizzaSlice.js'
import './article.css'
import './typografy.css'
import './customwh.css'

const Article = ( { producto, setDescription } ) => {

  const dispatch = useDispatch()

const { id, nombre, precio, demora, imagen } = producto; 

//abre el detalle
const handleClick = ()=>{
  if(window.innerWidth >= 980){

    dispatch(updateProductCart(producto))
    setDescription(true)
  }else{
    dispatch(updateProductCart(producto))
  }
}

// const handleAddCart = () => {
//   let count = 1
//   dispatch(addMenu({id, nombre, imagen, count, precio }))
//   dispatch(calculateTotal())
// }


  return (
    <motion.article 
      id={id} 
      className='article custom-article'
      initial={{ opacity: 0.7, scale: 0.7 }} // Estado inicial antes de estar en vista
      whileInView={{ opacity: 1, scale: 0.95 }} // Estado al estar en vista al 90%
      exit={{ opacity: 0.7, scale: 0.7 }} // Estado al salir de la vista
      transition={{ duration: 0.3 }} // Duración de la animación
      viewport={{ once: false, amount: 0.85 }} // Activa whenInView cuando el 90% esté en vista
      
      >
        <div className='custom-width-img-article'>

          <img className='img-article' src={imagen} alt="Pizza" />

        </div>
        <div className='div-description-article custom-div-description-article'>

          <div className='div-title-article '>

          <h2 className=' h2-article alegreya fs-5'>{nombre}</h2>
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
          </div>
          <div className='div-btn-article'>
             
                <span 
                      className='span-price-article'
                      >
                        ${precio}
                </span>

                {window.innerWidth>=980 ? 
              <button onClick={handleClick} className= ' btn-link-article'>
              <AddShoppingCart className='icon-article'/>
              </button>
              :

              <Link onClick={handleClick} to={PATH.descripcion} className= ' btn-link-article'>
                    <AddShoppingCart className='icon-article'/>
              </Link>
              }
                
              {/* <button className='btn-carrito-article'  onClick={handleAddCart} ><AddShoppingCart className='icon-article'/></button> */}
             
          </div>
          

        </div>
    </motion.article>
  )
}

export default Article
