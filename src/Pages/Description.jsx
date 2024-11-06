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
import { useSelector } from "react-redux"


const Description = () => {

const id = useSelector((store)=>store.pizzas.ide)

const productos = useSelector((store)=>store.pizzas.list)

const producto = productos.find(pizza=>pizza.id===id)

const { nombre, descripcion, precio, imagen } = producto

const [count, setCount] = useState(1)

const addhandleClick = () => {
      setCount(count + 1)
}
const subhandleClick=()=>{
   if(count>1){
      setCount(count - 1)
   }
 
}


  return (
    <>
    <div className='vw-100 vh-100 d-flex flex-column justify-content-evenly'>

    <div className='vh-25 d-flex justify-content-between'>
      <Link to={PATH.carta} className='ms-3 btn btn-back '><ArrowBackIosNewIcon/></Link>
      <h2>Detalle</h2>
      <button className='me-3 btn btn-back '><FavoriteIcon /></button>

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
        <span className='ms-5 span-price roboto'>${precio}</span>
        <button className=' btn-carrito me-5'><AddShoppingCart className='add-cart'/></button>
    </div>
    </div>
    </>
  )
}

export default Description
