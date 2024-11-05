import '../components/main.css'
import '../components/body.css'
import About from '../components/About'
import Redes from '../components/Redes'

const Inicio = () => {
  return (
    <>
  
          <div className='w-100 h-100 d-flex align-items-center justify-content-evenly gap-5 flex-column'>
            <About/>
            <img className='img-love ' src="/amamos-lapizza.svg" alt="Amamos-la-pizza" />
            <Redes/>
            </div>

      
    </>
  )
}

export default Inicio
