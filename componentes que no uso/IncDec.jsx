import './incdec.css'

const IncDec = () => {
  return (
    /* From Uiverse.io by Z4drus */ 
<div className="button-container">
  <button className="button-3d">
    <div className="button-top">
      <span className="material-icons">❮</span>
    </div>
    <div className="button-bottom"></div>
    <div className="button-base"></div>
  </button>
  <span>num</span>
  <button className="button-3d">
    <div className="button-top">
      <span className="material-icons">❯</span>
    </div>
    <div className="button-bottom"></div>
    <div className="button-base"></div>
  </button>
</div>

  )
}

export default IncDec
