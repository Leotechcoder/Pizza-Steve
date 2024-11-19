import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { PATH } from "../Routes/PATH"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { calculateTotal, deleteMenu } from "../Feature/Pizzas/menuSlice";
import Articlepayment from "../components/Articlepayment";
import '../components/typografy.css'
import './descripcion.css'
import './payment.css'



const Payment = () => {


const { precioTotal, producto, iva } = useSelector((state)=>state.menu)

let pedido = 'Hola! mi pedido es: %0a'; 
const lista = ()=>{

  producto.forEach(element => {
  
    const { nombre, count } = element;
    pedido += `${count} de ${nombre}%0a`;
  });
} 
  
  

const total = precioTotal + precioTotal * (iva/100)
const dispatch = useDispatch()

const handleDelete = ()=>{
  dispatch(deleteMenu())
  dispatch(calculateTotal())
}

const handlePay = ()=>{
  
  lista()
  setTimeout( () =>{
    const number = "+5492984307550";
    const mensaje = pedido;
    const Total =  `Con un total de: $${total}.`
    
    const url = `https://wa.me/${number}?text=${mensaje}%0a${Total}%0a%0a`;
    window.open(url, '_blank').focus();
 
    console.log('no anduvo pagar');

  },1)
  
}

  return (
    <div className="vw-100 vh-100 d-flex flex-column mt-2 px-2 div-master-payment">
      <div className='w-100 d-flex justify-content-start mt-4'>
          <Link to={PATH.inicio} className='ms-3 btn btn-back '><ArrowBackIosNewIcon/></Link>
          <h2 className='roboto h2-payment '>Su pedido</h2>    

      </div>
    <div className="w-100 d-flex flex-column gap-2 div-productos-payment">

        {/*btn para borrar todo */}
        <div className="div-remove w-100">
          <button onClick={handleDelete} className="w-50 btn-remove-payment btn d-flex align-items-center justify-content-end ">
            <span className="roboto">Remover Todo</span>
          </button>  
        </div>
        
        <div className="container-articles mt-2 pt-2">
           {/*recorro el array para mostrar los productos */}
        {producto.map((producto)=>{
            return(<Articlepayment key={producto.id} producto={producto} />)
        })} 
        </div>
        


        <section className="d-flex flex-column w-100 mt-auto mb-2">

            <div className="d-flex px-3 justify-content-between">
                <span>Sub Total</span>
                <span>${precioTotal}</span>
            </div>
            <div className="d-flex px-3 justify-content-between">
                <span>IVA</span>
                <span>{iva}%</span>
            </div>
            <div className="d-flex px-3 justify-content-between">
                <span>Total</span>
                <span>${total}</span>
            </div>
        </section>
    </div>
    
    <div className="d-flex flex-column gap-2 div-btn-pagar-payment my-4">
        {/*btn para pagar */}
        <button onClick={handlePay} className="btn-pagar-payment btn roboto">Pagar</button>
    </div>

    </div>
  )
}

export default Payment
