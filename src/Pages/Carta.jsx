
import '../components/article.css'
import Buttons from "../components/Buttons"
import NavbarMovil from "../components/NavbarMovil"
import LabelBottomNavigation from "../components/buttonNavigation"
import SectionCarta from "../components/SectionCarta"



const Carta = () => {
  return (
    <>
    
    <div className="w-100 d-flex flex-column gap-4">
      {/*Buscador */}
      <div className="w-100 d-flex justify-content-end gap-2 vh-25">

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
        {/*Contenido aqui, van a ser article y dentro van a tener: la imagen de la pizza, el nombre, cuanto tiempo demora en hacerse, el precio y un boton para ver las descripcion */}

        
      <LabelBottomNavigation/>
       
      </div>
    </div>
    
      
    </>
  )
}

export default Carta
