

import './carta.css'
import Buttons from "../components/Buttons"
import NavbarMovil from "../components/NavbarMovil"
import LabelBottomNavigation from "../components/ButtonNavigation"
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
    className="container-carta">
      
    {/*Buscador */}
      <div className="container-navbarmobil">

          <NavbarMovil/>
      
      </div>
    
    {/*Botones de navegacion*/}

      <div className="container-botonera">
          <Buttons/>
      </div>
      
    {/*Contenido de la carta*/}

      <div className="section-carta">
          <SectionCarta/>
      </div>
      
      
      <div className="container-label-btn">
           
          <LabelBottomNavigation/>
       
      </div>
    </div>
    
      
    </>
  )
}

export default Carta
