import { useSelector } from "react-redux"
import Article from './Article'
import Payment from './PaymentLg'
import Description from './Precarrito'
import Navbar from "./Navbar"
import '../Pages/carta.css'
import './customwh.css'
import Buttons from "./Buttons2"

const SectionCarta = () => {
const { selectedCarta, visual }  = useSelector(store=>store.pizzas)

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
                          <Article key={producto.id} producto={producto} />
                      )})}

                  </div>
          </div>
    
        <div className="container-payment">
            {visual? <Description /> : <Payment/>}
            
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
