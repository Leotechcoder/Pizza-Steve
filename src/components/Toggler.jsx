import { NavLink } from "react-router-dom"
import { PATH } from "../Routes/PATH"
import './toggler.css'
import { useDispatch, useSelector } from "react-redux"
import { toggleClick } from "../Feature/Pizzas/toglerslice"

const Toggler = () => {

const { click } = useSelector(store=>store.togler)

const dispatch = useDispatch()


const handleClick = ()=>{
  if(click){
    dispatch(toggleClick(false))
  }else{
    dispatch(toggleClick(true))
  }
  
}




  return (
    <nav className="navbar pt-3 col-7 col-md-5 col-lg-3">
      <div className="w-100 d-flex flex-column gap-3">

          <button onClick={handleClick} className="navbar-toggler me-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon togler"></span>
          </button>
  {click ? 
            <div className=" bg-transparent z-1 me-auto ms-2" id="collapsibleNavId">
                      <ul className=" container-fluid bg-dark navbar-nav d-flex flex-column align-items-start gap-4 py-2n rounded-3">
                          <li className="w-100">
                              <NavLink onClick={handleClick} to={PATH.casa} className={({isActive})=> 
                                          isActive ? 'nav-link ms-4 ps-2 text-white rounded-1 fw-bolder border-bottom border-primary text-center'
                                                    : 'nav-link ms-3 text-white rounded-1 fw-bolder'} 
                          
                                  >COMO EN CASA</NavLink>
                          </li>
                          <li className="w-100">
                              <NavLink onClick={handleClick} to={PATH.carta}
                                  className={({isActive})=> 
                                      isActive ? 'nav-link ms-4 ps-2 mb-3 text-white rounded-1 fw-bolder border-bottom border-primary text-center'
                                                : 'nav-link ms-3 text-white rounded-3 fw-bolder'}
                          
                                  >NUESTRA CARTA</NavLink>
                          </li>
                      </ul>
            </div> 
            
            : null}

      </div>
      
</nav>
  )
}

export default Toggler
