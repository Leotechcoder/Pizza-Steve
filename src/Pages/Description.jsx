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
import { addMenu } from '../Feature/Pizzas/menuSlice';


const Description = () => {


//para controlar el valor de la key "like"
const dispatch = useDispatch()

//trabajo con el state de pizzas
const like = useSelector(store=>store.pizzas.like)

const producto = useSelector((store)=>store.pizzas.productCart);

const {id, nombre, descripcion, precio, imagen } = producto;

//guardo valor de objeto en el state de menu
const dispatchMenu = useDispatch()

//creo un state propio del componente
const [count, setCount] = useState(1)

//funcion para el boton de agregar al carrito

const handleAddCart = () => {
  dispatchMenu(addMenu({id, nombre, imagen, count, precio }))
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
    <div className='vw-100 vh-100 d-flex flex-column justify-content-evenly div-master-sec-carta'>

    <div className='vh-25 d-flex justify-content-between'>
      <Link to={PATH.carta} className='ms-3 btn btn-back '><ArrowBackIosNewIcon/></Link>
      <h2 className='roboto'>Detalle</h2>
      <button onClick={handleLike} className='me-3 btn btn-back'>
        
        {like ? <FavoriteIcon className='btn-like-dark'/> : <FavoriteIcon className='btn-like-white' />}
        
        
        </button>
      

    </div>

    <div className='container-description d-flex flex-column text-center'>
        <h1 className='h1 alegreya mt-4'>{nombre}</h1>
        <img className='img-pizza' src={imagen} alt="pizza-vertical"  />
        <span className='p open-sans span-description'>{descripcion}</span>
    </div>

    <div className='W-100 vh-25 d-flex justify-content-center'>
        
    <div className="card__counter ">
            <button onClick={subhandleClick} className="card__btn"><RemoveIcon className='remove-icon'/></button>
            <div className="card__counter-score">{count}</div>
            <button onClick={addhandleClick} className="card__btn card__btn-plus"><AddIcon className='add-icon' /></button>
        </div>

    </div>
    <div className='vh-25 d-flex justify-content-between'>
        <span className='ms-5 span-price roboto'>${price}</span>
        <Link  className='link-cart me-5' to={PATH.carta}><button className=' btn-carrito me-5'  onClick={handleAddCart} ><AddShoppingCart className='add-cart'/></button></Link>
    </div>
    </div>
    </>
  )
}

export default Description
