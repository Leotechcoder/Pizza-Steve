
import '../components/article.css'
import Buttons from "../components/Buttons"
import NavbarMovil from "../components/NavbarMovil"
import LabelBottomNavigation from "../components/buttonNavigation"
import SectionCarta from "../components/SectionCarta"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toggleClick } from '../Feature/Pizzas/toglerslice'



const Carta = () => {


const dispatch = useDispatch()

const navFalse = ()=>{
  dispatch(toggleClick(false))
}

useEffect(() => {
 navFalse()
}, [])


 
return (
    <>
    
    <div 
    className="w-100 d-flex flex-column gap-4">
      
    {/*Buscador */}
      <div className="w-100 d-flex justify-content-end gap-2 vh-25 ps-4">

          <NavbarMovil/>
      
      </div>
    
    {/*Botones de navegacion*/}
      <div className="vh-25">
          <Buttons/>
      </div>
      <div className="section-carta">
          <SectionCarta/>
      </div>
      
    {/*Contenido de la carta*/}
      <div className="w-100 d-flex justify-content-center ">
           
          <LabelBottomNavigation/>
       
      </div>
    </div>
    
      
    </>
  )
}

export default Carta
