import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import './rootlayout.css'
import Toggler from "../components/Toggler"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <>
        <div className='container-fluid img-fondo-layout container-layout'>

            <div className="container-navbar-toggler">
                <Navbar/>
                <Toggler/>
            </div>

            <div className="container-outlet">
                <Outlet/>
            </div>

            <div className="container-footer">
              <Footer/>
            </div>
            
            </div>

    </>
  )
}

export default RootLayout
