import Form from './Form'
import './navbar.css'
import { NavLink } from "react-router-dom"
import { PATH } from "../Routes/PATH"




const Navbar = () => {
  return (
    <>
      <nav
    className="navbar bg-transparent container-fluid pt-3 navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid px-4 gap-5 h-100">
        <div >
            <h1 className='ms-2'>
               <NavLink to={PATH.inicio} className={({isActive})=> 
                                isActive ? 'nav-link me-3 bg-transparent text-white rounded-3 pacifico-regular '
                                         : 'nav-link me-3 text-white rounded-3 pacifico-regular '} 
                  
                    >Pizza Steve</NavLink> 
            </h1>
            
        </div>
        
        
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto gap-4 me-5 mt-2 mt-lg-0">
                <li>
                    <NavLink to={PATH.casa} className={({isActive})=> 
                                isActive ? 'nav-link me-3 bg-primary text-white rounded-3 fw-bolder'
                                         : 'nav-link me-3 text-white rounded-3 fw-bolder'} 
                 
                        >COMO EN CASA</NavLink>
                </li>
                <li>
                    <NavLink to={PATH.carta}
                        className={({isActive})=> 
                            isActive ? 'nav-link me-3 bg-primary text-white rounded-3 fw-bolder'
                                     : 'nav-link me-3 text-white rounded-3 fw-bolder'}
                
                        >NUESTRA CARTA</NavLink>
                </li>
            </ul>
            <Form/>
        </div>
    </div>
</nav>

    </>
  )
}

export default Navbar


