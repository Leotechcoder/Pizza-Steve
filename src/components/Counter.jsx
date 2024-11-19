import { useEffect, useState } from "react"
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


const Counter = ({subHandleClick,  countRef, addHandleClick}) => {

    const [render, setRender] = useState(countRef)


    useEffect(() => {
        setRender(countRef)
    }, [countRef])
    
  return (
    <div className="w-100 d-flex justify-content-center mb-2">
    <div className="card__counter">
      <button onClick={subHandleClick} className="card__btn">
        <RemoveIcon className="remove-icon" />
      </button>
      <div className="card__counter-score">{render}</div>
      <button onClick={addHandleClick} className="card__btn card__btn-plus">
        <AddIcon className="add-icon" />
      </button>
    </div>
  </div>
  )
}

export default Counter
