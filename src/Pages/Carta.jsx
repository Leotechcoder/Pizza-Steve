
import '../components/customwh.css'
import './carta.css'
import Buttons from "../components/Buttons"
import LabelBottomNavigation from "../components/ButtonNavigation"
import SectionCarta from "../components/SectionCarta"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toggleClick } from '../Feature/Pizzas/toglerslice'
import Navbar from '../components/Navbar'
import FormSearch from '../components/FormSearch'




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
    
    {/*Botones de navegacion*/}

      <div className="container-botonera">
          <Buttons/>
      </div>
      
    {/*Contenido de la carta*/}

      <div className="container-fluid gap-4 d-flex" id='section-carta'>
          <SectionCarta/>
      </div>
      
      
      <div className="container-fluid container-label-btn d-lg-none">
           
          <LabelBottomNavigation/>
       
      </div>
    </div>
    
      
    </>
  )
}

export default Carta
