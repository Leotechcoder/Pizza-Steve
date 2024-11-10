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
    <nav className="navbar navbar-expand-lg ">
          <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon togler"></span>
          </button>
  {click ? 
            <div className="w-100 bg-black z-1 h-75" id="collapsibleNavId">
                      <ul className=" w-100  align-items-center navbar-nav d-flex flex-column gap-4 me-5 mt-2 mt-lg-0">
                          <li className="w-50 bg-black">
                              <NavLink onClick={handleClick} to={PATH.casa} className={({isActive})=> 
                                          isActive ? 'nav-link me-3 text-white rounded-1 fw-bolder border-bottom border-primary'
                                                    : 'nav-link me-3 text-white rounded-1 fw-bolder'} 
                          
                                  >COMO EN CASA</NavLink>
                          </li>
                          <li className="w-50 bg-black">
                              <NavLink onClick={handleClick} to={PATH.carta}
                                  className={({isActive})=> 
                                      isActive ? 'nav-link me-3 mb-3 text-white rounded-1 fw-bolder border-bottom border-primary'
                                                : 'nav-link me-3 text-white rounded-3 fw-bolder'}
                          
                                  >NUESTRA CARTA</NavLink>
                          </li>
                      </ul>
            </div> 
            
            : null}
      
</nav>
  )
}

export default Toggler
