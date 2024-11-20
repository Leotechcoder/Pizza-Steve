import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, toggleDisplay } from "../Feature/Pizzas/pizzaSlice";


const Counter = () => {

const count = useSelector((store) => store.pizzas.count);
const dispatch = useDispatch()

// Incrementar cantidad
const addHandleClick = () => {
  dispatch(incrementCount());
  dispatch(toggleDisplay()) // Disparar acción para incrementar el contador
};

// Decrementar cantidad
const subHandleClick = () => {
  dispatch(decrementCount()); // Disparar acción para decrementar el contador
  dispatch(toggleDisplay())
};    

    
  return (
    <div className="w-100 d-flex justify-content-center mb-2">
    <div className="card__counter">
      <button onClick={subHandleClick} className="card__btn">
        <RemoveIcon className="remove-icon" />
      </button>
      <div className="card__counter-score">{count}</div>
      <button onClick={addHandleClick} className="card__btn card__btn-plus">
        <AddIcon className="add-icon" />
      </button>
    </div>
  </div>
  )
}

export default Counter
