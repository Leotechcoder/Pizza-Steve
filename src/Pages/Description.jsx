import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import  AddShoppingCart from '@mui/icons-material/AddShoppingCart'
import RemoveIcon from '@mui/icons-material/Remove';
import '../components/typografy.css'
import './descripcion.css'
import { Link } from 'react-router-dom';
import { PATH } from "../Routes/PATH"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { updateLike } from '../Feature/Pizzas/pizzaSlice';
import { addMenu, calculateTotal } from '../Feature/Pizzas/menuSlice';
import SelectCart from "../components/SelectCart"


const Description = ({setDescription}) => {


//para controlar el valor de la key "like"
const dispatch = useDispatch()

//trabajo con el state de pizzas
const like = useSelector(store=>store.pizzas.like)
const {id, nombre, precio, imagen } = useSelector((store)=>store.pizzas.productCart);



//creo un state propio del componente
const [count, setCount] = useState(1)

//funcion para el boton de agregar al carrito

const handleAddCart = () => {
  dispatch(addMenu({id, nombre, imagen, count, precio }))
  dispatch(calculateTotal())
  setDescription(false)
}

//funciones para el boton de restar y sumar cantidad

const addhandleClick = () => {
      setCount(count + 1)
}
const subhandleClick=()=>{
   if(count>1){
      setCount(count - 1)
   }
 
}

//calculo el precio total de la pizza según la cantidad seleccionada
const price = (precio * count);



//funcion para hacer like
const handleLike = ()=>{
  if(like){
    dispatch(updateLike(false))
  }else{

    dispatch(updateLike(true))
  }
}


  return (
    <>
    <div className=' d-flex flex-column div-master-sec-carta'>

    <div className=' d-flex justify-content-between mt-3'>
      <Link to={PATH.carta} className='ms-3 btn btn-back d-lg-none  buttons-description'><ArrowBackIosNewIcon/></Link>
      <h2 className="text-center mb-4 text-primary fs-5">Arma tu Pizza</h2>
      <button onClick={handleLike} className='me-3 btn btn-back buttons-description'>
        
        {like ? <FavoriteIcon className='btn-like-dark'/> : <FavoriteIcon className='btn-like-white' />}
        
        
        </button>
      

    </div>

    <div className='container-description d-flex flex-column text-center'>
        <h1 className='fs-5 mt-4'>{nombre}</h1>
        <img className='img-pizza' src={imagen} alt="pizza-vertical"  />
        
    </div>

    
      <SelectCart/>
    
    

    <div className='w-100 d-flex justify-content-center mb-2'>
        
        <div className="card__counter ">
            <button onClick={subhandleClick} className="card__btn"><RemoveIcon className='remove-icon'/></button>
            <div className="card__counter-score">{count}</div>
            <button onClick={addhandleClick} className="card__btn card__btn-plus"><AddIcon className='add-icon' /></button>
        </div>

    </div>
    <div className='v-25 d-flex justify-content-between p-2 mb-3'>
        <span className='ms-5 span-price roboto'>${price}</span>
        <Link  className='link-cart me-5' to={PATH.carta}><button className=' btn-carrito me-5'  onClick={handleAddCart} ><AddShoppingCart className='add-cart'/></button></Link>
    </div>
    </div>
    </>
  )
}

export default Description
