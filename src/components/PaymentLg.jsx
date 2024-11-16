import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, deleteMenu } from "../Feature/Pizzas/menuSlice";
import Articlepayment from "../components/Articlepayment";
import './paymentlg.css'



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
    <div className="d-none d-lg-flex flex-column mt-2 px-2 div-master-payment rounded-4">
      <div className='w-100 mt-2'>
      <h2 className='roboto fs-5'>Mi pedido</h2>
    </div>
    <div className="w-100 d-flex flex-column gap-2">

        {/*btn para borrar todo */}
        <div className="">
          <button onClick={handleDelete} className=" w-100 btn-remove-payment btn d-flex align-items-center justify-content-end ">
            <span className="roboto fs-6">Borrar Todo</span>
          </button>  
        </div>
        
        <div className="container-articles-paymentlg">
           {/*recorro el array para mostrar los productos */}
        {producto.map((producto)=>{
            return(<Articlepayment key={producto.id} producto={producto} />)
        })} 
        </div>
        


        <section className="d-flex flex-column w-100">
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