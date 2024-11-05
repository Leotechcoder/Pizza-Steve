import { NavLink } from "react-router-dom"
import { PATH } from "../Routes/PATH"
import { useEffect, useState } from "react"

const Toggler = () => {

const [click, setClick] = useState(false)

const handleClick = ()=>{
  if(click){
    setClick(false)
  }else{
    setClick(true)
  }
  
}

useEffect(() => {
  
}, [click])



  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
  <button onClick={handleClick} className="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {click ? 
  <div className=" w-100 h-75" id="collapsibleNavId">
            <ul className=" w-100 align-items-center navbar-nav d-flex flex-column gap-4 me-5 mt-2 mt-lg-0">
                <li>
                    <NavLink to={PATH.casa} className={({isActive})=> 
                                isActive ? 'nav-link me-3 bg-secundary text-white rounded-1 fw-bolder border-bottom border-primary'
                                         : 'nav-link me-3 text-white rounded-1 fw-bolder'} 
                 
                        >COMO EN CASA</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.carta}
                        className={({isActive})=> 
                            isActive ? 'nav-link me-3 bg-secundary text-white rounded-1 fw-bolder border-bottom border-primary'
                                     : 'nav-link me-3 text-white rounded-3 fw-bolder'}
                
                        >NUESTRA CARTA</NavLink>
                </li>
            </ul>
        </div> : false}
  
</nav>
  )
}

export default Toggler
