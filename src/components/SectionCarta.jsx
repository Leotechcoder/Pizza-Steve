import { useSelector } from "react-redux"
import Article from './Article'

const SectionCarta = () => {
const Productos  = useSelector(store=>store.pizzas.list)

  return (
    <>
    <div className='d-flex flex-column align-items-center gap-3 w-100 h-100 overflow-y-scroll'>
      {Productos.map((producto)=>{
        return (
                <Article key={producto.id} producto={producto} />
              )
      })}
    </div>
      

    </>
  )
}

export default SectionCarta
