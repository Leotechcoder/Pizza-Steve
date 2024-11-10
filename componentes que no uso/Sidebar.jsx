import { NavLink } from "react-router-dom"
import { PATH } from "../src/Routes/PATH"


const routes = [
    { path: PATH.inicio , name: 'Inicio'},
    { path: PATH.casa, name: 'Casa'},
    { path: PATH.carta, name: 'Carta' },
]


const Sidebar = () => {
  return (
    <>
      <div className="pt-4 w-100 vh-25">
        <nav className="d-flex py-2">
            {routes.map((route)=>{
                return(<NavLink 
                        key={route.name} 
                        to={route.path}
                        className={({isActive})=> 
                                isActive ? 'nav-link me-3 bg-primary text-white rounded-3 fw-bolder'
                                         : 'nav-link me-3 text-dark rounded-3'}
                                         >{route.name}</NavLink>)
                })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
