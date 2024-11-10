import { useSelector } from "react-redux"
import Article from './Article'

const SectionCarta = () => {
const { selectedCarta }  = useSelector(store=>store.pizzas)

const notfoundProduct = {
  id: 1,
  nombre: 'Producto no encontrado',
  precio: 0,
  img: '',
}

  return (
    <>
  
      {selectedCarta === 'not found' ? <Article key={notfoundProduct.id} producto={notfoundProduct}/> : selectedCarta.map((producto)=>{
        return (
                <Article key={producto.id} producto={producto} />
              )
      })}
   
      

    </>
  )
}

export default SectionCarta
