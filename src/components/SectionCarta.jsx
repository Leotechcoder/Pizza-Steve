import { useSelector } from "react-redux"
import Article from './Article'
import Payment from './PaymentLg'
import Description from '../components/Precarrito'
import Navbar from "./Navbar"
import '../Pages/carta.css'
import './customwh.css'
import { useState } from "react"
import Buttons from "./Buttons2"

const SectionCarta = () => {
const { selectedCarta }  = useSelector(store=>store.pizzas)
const [description, setDescription] = useState(false)

const notfoundProduct = {
  id: 1,
  nombre: 'Producto no encontrado',
  precio: 0,
  img: '',
}

  return (
    <>
     {/*Nav-bar*/}
     <div className='d-none d-lg-flex w-100 justify-content-evenly'>
          <div className='container-productos'>
                    <div className=" d-none d-lg-flex justify-content-between align-items-center">
                                <Navbar/>
                                {/* <FormSearch/>  */}
                                <Buttons/>
                    </div>

                  <div className="section-carta px-3 px-md-2">
                      {selectedCarta === 'not found' ? <Article key={notfoundProduct.id} producto={notfoundProduct}/> : selectedCarta.map((producto)=>{
                        return (
                          <Article key={producto.id} producto={producto} setDescription={setDescription}/>
                      )})}

                  </div>
          </div>
    
        <div className="container-payment">
            {description? <Description setDescription={setDescription}/> : <Payment/>}
            
        </div>

     </div>


    <div className="section-carta px-3 px-md-4 d-lg-none">
        {selectedCarta === 'not found' ? <Article key={notfoundProduct.id} producto={notfoundProduct}/> : selectedCarta.map((producto)=>{
          return (
                  <Article key={producto.id} producto={producto} />
                )
              })}

    </div>
      
   
      

    </>
  )
}

export default SectionCarta
