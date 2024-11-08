import { Link } from "react-router-dom"
import { PATH } from "../Routes/PATH"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../components/typografy.css'
import './descripcion.css'
import './payment.css'
import { useSelector } from "react-redux";
import Articlepayment from "../components/Articlepayment";
import {  useEffect, useRef } from "react";

const Payment = () => {


const { producto, iva } = useSelector((state)=>state.menu)

let priceRef = useRef(0)
let countRef = useRef(0)

useEffect(() => {
 sumPrice(producto)
 sumCount(producto)
}, [producto])


const sumPrice = (producto)=>{
  producto.map((producto)=> priceRef += producto.precio)
} 

const sumCount = (producto)=>{
  producto.map((producto)=> countRef += producto.count)
}



const subTotal = priceRef.current*countRef.current
const total = subTotal * iva + subTotal



  return (
    <div className="vw-100 vh-100 d-flex flex-column mt-2 px-2 div-master-payment">
      <div className='w-100 d-flex justify-content-start mt-4'>
      <Link to={PATH.carta} className='ms-3 btn btn-back '><ArrowBackIosNewIcon/></Link>
      <h2 className='roboto h2-payment '>Carrito</h2>    

    </div>
    <div className="w-100 d-flex flex-column gap-2 div-productos-payment">

        {/*btn para borrar todo */}
        <div className="div-remove ">
          <button className=" btn-remove-payment btn ">
            <span className="roboto">Remove All</span>
          </button>  
        </div>
        
        <div className="container-articles mt-2 ">
           {/*recorro el array para mostrar los productos */}
        {producto.map((producto)=>{
            return(<Articlepayment key={producto.id} producto={producto} />)
        })} 
        </div>
        


        <section className="d-flex flex-column w-100 mt-auto mb-2">

            <div className="d-flex px-3 justify-content-between">
                <span>Sub Total</span>
                <span>${subTotal}</span>
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
        <button className="btn-pagar-payment btn roboto">Pagar</button>
    </div>

    </div>
  )
}

export default Payment
