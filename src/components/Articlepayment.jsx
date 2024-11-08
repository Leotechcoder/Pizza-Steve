import { useDispatch } from 'react-redux';
import '../Pages/payment.css'
import './typografy.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useEffect, useRef } from 'react';
import { calculateTotal, removeProductMenu, updatecountMenu } from '../Feature/Pizzas/menuSlice';



const Articlepayment = ( { producto } ) => {

//traigo y genero las variables con las que voy a trabajar


const { id, nombre, precio, imagen, count } = producto;  
    
const productoRef = useRef(producto)

 //actualizo el productoRef cuando cambia
useEffect(() => {
  productoRef.current = producto;
}, [producto])

const dispatch = useDispatch()

//funcion para calcular el precio segun la cantidad

let pricecurrent = precio * count

//funcion para el boton de pagar

//funciones para el boton de sumar y restar cantidad

const handleAddCount = () => {
  
  const countcurrent = count + 1
  pricecurrent = pricecurrent + precio
  dispatch(updatecountMenu({ id, countcurrent, pricecurrent }))
  dispatch(calculateTotal())

};
const handleSubCount = () => {
  
  
  if(count > 1){
    const countcurrent = count - 1
    pricecurrent = pricecurrent - precio
    dispatch(updatecountMenu({ id, countcurrent, pricecurrent }))
    dispatch(calculateTotal())
  }else{
    deleteProduct()
  }
  
};

const deleteProduct = ()=>{
  dispatch(removeProductMenu(id))
  dispatch(calculateTotal())
}



  return (
    <div className='d-flex align-items-center'>
    
    <article id={id} className='article-payment'>
        <div className='d-flex align-items-center justifiy-content-center'>

          <img className='img-art-payment' src={imagen} alt="Pizza" />

        </div>
        <div className='d-flex flex-column justify-content-center text-left ps-2'>

          <h2 className=' h2-art-payment alegreya'>{nombre}</h2>
          
          <div className='d-flex gap-4'>
              <span 
                    className='roboto span-price-article fs-5'
                    >
                      ${pricecurrent}
              </span>
              
          </div>
          

        </div>
        <div className='w-25 d-flex flex-column align-items-center'>
          <span className="roboto span-count-art-payment">{count}</span>
          
          <div className=" div-btn-art-payment">

            <button onClick={handleSubCount} className="btn btn-art-payment"><RemoveIcon className='remove-icon'/></button>
            <button onClick={handleAddCount} className="btn btn-art-payment"><AddIcon className='add-icon' /></button>
          </div>
        </div>
    </article>
        <button onClick={deleteProduct} className=' btn-delete-art'>
            <DeleteForeverOutlinedIcon className='svg-delete'/>
        </button>

    </div>
  )
}

export default Articlepayment
