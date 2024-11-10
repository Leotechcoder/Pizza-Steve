import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMenu } from "../Feature/Pizzas/pizzasSlice"

const initial = {
    nombre: "",
}

const Form = () => {

    const [form, setForm] = useState(initial)

    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        setForm({...form, nombre: target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        dispatch(addMenu(form))
        setForm(initial)
    }

  return (
    

    <form onSubmit={handleSubmit} className="w-75 d-flex my-2 my-lg-0 gap-3 vh-25">
                <input
                    className="w-75 form-control me-sm-2"
                    type="text"
                    placeholder="Buscar"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <button
                    className="btn btn-outline-secondary my-2 my-sm-0 botones"
                    type="submit"
                >
                    Buscar
                </button>
            </form>
    
  )
}

export default Form
