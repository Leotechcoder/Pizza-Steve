import { useState } from 'react'
import './navbarmovil.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCarta } from '../Feature/Pizzas/pizzaSlice'

const NavbarMovil = () => {


  const [value, setValue] = useState('')
  const [form, setForm] = useState('')
  const productos = useSelector(state=>state.pizzas.list)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
    const filtered = productos.filter(
      (producto) => 
            producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) ? 
              producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) : 
              producto.categoria.toLowerCase().includes(e.target.value.toLowerCase()) ); 
    setForm(filtered)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.length>0){
      dispatch(selectedCarta(form))
    }else{
      dispatch(selectedCarta('not found'));
    }
    
  }

  return (
    
    <nav className="w-100 navbar bg-body-transparent container-fluid">
    <div className="w-100 d-flex">
      <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-end gap-3" role="search">
        <input 
              className="form-control input" 
              type="search" 
              placeholder="Que vas a pedir?" 
              aria-label="Search"
              value={value}
              onChange={handleChange} 
        />

        <button 
              className="btn btn-outline-success" 
              type="submit">
                Buscar
        </button>
      </form>
    </div>
  </nav>
  )
}

export default NavbarMovil
