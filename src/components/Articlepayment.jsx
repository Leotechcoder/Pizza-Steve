import { useEffect, useRef } from 'react';
import { calculateTotal, removeProductMenu, updatecountMenu } from '../Feature/Pizzas/menuSlice';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import '../Pages/payment.css'
import './typografy.css'
import { newvisual, updateProductCart } from '../Feature/Pizzas/pizzaSlice';
import { Link } from 'react-router-dom';
import { PATH } from '../Routes/PATH'



const Articlepayment = ( { producto } ) => {

//traigo y genero las variables con las que voy a trabajar


const { id, nombre, precio, imagen, count, categoria } = producto;  


    
const productoRef = useRef(producto)

 //actualizo el productoRef cuando cambia
useEffect(() => {
  productoRef.current = producto;
}, [producto])

const dispatch = useDispatch()

//funcion para calcular el precio segun la cantidad

let pricecurrent = precio * count


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

const handleEdit = ()=>{
  if(window.innerWidth >= 980){

    dispatch(updateProductCart(producto))
    dispatch(newvisual(true))
  }else{
    dispatch(updateProductCart(producto))
  }
}




  return (
    <motion.div 
        className='d-flex align-items-center'
        initial={{ opacity: 0.7, scale: 0.85 }} // Estado inicial antes de estar en vista
        whileInView={{ opacity: 1, scale: 0.9 }} // Estado al estar en vista al 90%
        exit={{ opacity: 0.7, scale: 0.85 }} // Estado al salir de la vista
        transition={{ duration: 0.3 }} // Duración de la animación
        viewport={{ once: false, amount: 0.85}} // Activa whenInView cuando el 85% esté en vista        
    >
    
    <article id={id} className='article-payment'>
        <div className='d-flex align-items-center container-img-art'>

          <img className='img-art-payment' src={imagen} alt="Pizza" />

        </div>
        
        <div className='w-100 d-flex gap-2 px-1 align-items-center text-left ps-2 container-title-art'>

          {categoria === 'Pizzas' ? 
          <h2 className='font-title-article mt-1'>Pizza {nombre}</h2>
          :categoria === 'Hamburguesas' ? 
          <h2 className='font-title-article mt-1'>Hamburguesa {nombre}</h2>
          : categoria === 'Empanadas'?
          <h2 className='font-title-article mt-1'>Empanadas de {nombre}</h2>
          :
          <h2 className='font-title-article mt-1'>Lomo {nombre}</h2>
        }

        {window.innerWidth >= 968 ? 
        
            <button onClick={handleEdit} className='btn d-flex justify-content-center edit-artpay'>
                <UpdateIcon/>
                {/* <span className="roboto span-count-art-payment">{count}</span> */}
            </button>
            :
            <Link to={PATH.descripcion} onClick={handleEdit} className='btn d-flex justify-content-center w-25'>
                <UpdateIcon/>
                {/* <span className="roboto span-count-art-payment">{count}</span> */}
            </Link>
      
      }        
                
                

        </div>
              
        <div className='d-flex justify-content-between align-items-center container-price-art'>
                        <span 
                              className=''
                              >
                                ${pricecurrent}
                        </span>
                    
                    <div className=" div-btn-art-payment">

                      <button 
                      onClick={handleSubCount} 
                      className="btn btn-art-payment"
                      >
                        <RemoveIcon className='remove-icon'/>
                      </button>

                      <div className='w-100 d-flex justify-content-center align-items-center'>
                      <span className="roboto span-count-art-payment">{count}</span>
                      </div>

                      <button 
                      onClick={handleAddCount} 
                      className="btn btn-art-payment"
                      >
                        <AddIcon className='add-icon' />
                      </button>

                    </div>
                   
        </div>
    </article>
              <button onClick={deleteProduct} className=' btn-delete-art'>
                  <DeleteForeverOutlinedIcon className='svg-delete'/>
              </button>

          </motion.div>
  )
}

export default Articlepayment
