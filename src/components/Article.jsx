import './article.css'
import './typografy.css'
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddIcon from '@mui/icons-material/Add';
import  AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH';
import { useDispatch } from 'react-redux';
import { updateIde } from '../Feature/Pizzas/pizzaSlice.js'
import { addMenu, calculateTotal } from '../Feature/Pizzas/menuSlice.js';

const Article = ( { producto } ) => {

  const dispatch = useDispatch()

const { id, nombre, precio, demora, imagen } = producto; 

const handleClick = ()=>{
     dispatch(updateIde(producto))
}

const handleAddCart = (id, nombre, precio, imagen) => {
  let count = 1
  dispatch(addMenu({id, nombre, imagen, count, precio }))
  dispatch(calculateTotal())
}

  return (
    <article id={id} className='article'>
        <div className='d-flex gap-2'>

          <img className='img-article' src={imagen} alt="Pizza" />

        </div>
        <div className='d-flex flex-column justify-content-center align-items-center text-left'>

          <h2 className=' h2-article mt-4 alegreya'>{nombre}</h2>
          <span className='w-100 ps-2'>
            <IconButton className='mb-1' color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
            </IconButton> 
            {demora}
            </span>
          <div className='d-flex gap-4'>
              <span 
                    className='roboto span-price-article fs-3 ps-2'
                    >
                      ${precio}
              </span>
             
              <Link onClick={handleClick} to={PATH.descripcion} className= 'btn btn-article  mb-4 me-2'>
                    <AddIcon />
              </Link>
              <button className=' btn-carrito me-5'  onClick={handleAddCart} ><AddShoppingCart className='add-cart'/></button>
             
          </div>
          

        </div>
    </article>
  )
}

export default Article
