import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import './rootlayout.css'
import SwipeableTemporaryDrawer from "../components/DrawerRight"
import Footer from "../components/Footer"
import  TemporaryDrawer  from "../components/Drawerleft"
import Sidebar2 from "../components/Sidebar2"

const RootLayout = () => {
  return (

    <div className="d-flex container-master">
   
      <Sidebar2/>
   
      <div className='img-fondo-layout container-layout w-100'>
              
            <div className="container-title d-lg-none d-flex justify-content-between ">

              <div className="container-navbar-title">
              <Navbar/>
              </div>
              <div className="container-drawers">
              <TemporaryDrawer/>
              {/* <SwipeableTemporaryDrawer/>               */}
              </div>

              
            </div>           
            
           

            <div className="container-outlet">
                <Outlet/>
            </div>

            <div className="container-footer">
              <Footer/>
            </div>
            
      </div>

    </div>
  )
}

export default RootLayout
