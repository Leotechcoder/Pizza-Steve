// import Form from './Form'
import './navbar.css'
import { NavLink } from "react-router-dom"
import { PATH } from "../Routes/PATH"




const Navbar = () => {
  return (
            <>
                <nav
                    className=" bg-transparent pt-3">
            
                    { <div className="container-fluid h-100">
                        <div className='w-100' >
                            <h1 className=''>
                            <NavLink to={PATH.inicio} className={({isActive})=> 
                                                isActive ? 'nav-link bg-transparent text-white rounded-3 pacifico-regular text-start'
                                                        : 'nav-link me-lg-3 text-white rounded-3 pacifico-regular text-start fs-3'} 
                                
                                    >Pizza Steve</NavLink> 
                            </h1>
                            
                        </div>
                    </div>}
                </nav>

            </>
        )
}

export default Navbar


