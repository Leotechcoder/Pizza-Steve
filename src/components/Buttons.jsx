
import { useDispatch, useSelector } from "react-redux"
import { selectedCarta } from "../Feature/Pizzas/pizzaSlice"
import '../Pages/carta.css'


const Buttons = () => {

const Productos = useSelector(state=>state.pizzas.list)

const dispatch = useDispatch()

const handleClick = (e) => {
    switch (e.target.textContent) {
      case 'All':
        dispatch(selectedCarta(Productos))
        break;
      case 'Pizzas':
        dispatch(selectedCarta(Productos.filter(
          (producto) =>  
                  producto.categoria.toLowerCase().includes('pizzas') )))
        break;
      case 'Hamburguesas':
        dispatch(selectedCarta(Productos.filter(
          (producto) =>  
                  producto.categoria.toLowerCase().includes('hamburguesas') )))
        break;
      case 'Empanadas':
        dispatch(selectedCarta(Productos.filter(
          (producto) =>  
                  producto.categoria.toLowerCase().includes('empanadas') )))
        break;
      case 'Lomos':
        dispatch(selectedCarta(Productos.filter(
          (producto) =>  
                  producto.categoria.toLowerCase().includes('lomos') )))
        break;
    
      default:
        break;
    }
}

  return (
    <div className=" d-flex gap-3 container-buttons px-2 d-lg-none">
    
        <button onClick={handleClick} type='button' className='btn btn-light'>All</button>
        <button onClick={handleClick} type='button' className='btn btn-light'>Pizzas</button>
        <button onClick={handleClick} type='button' className='btn btn-light'>Empanadas</button>
        <button onClick={handleClick} type='button' className='btn btn-light'>Hamburguesas</button>
        <button onClick={handleClick} type='button' className='btn btn-light'>Lomos</button>    

    
    </div>
   

      
   
  )
}

export default Buttons
