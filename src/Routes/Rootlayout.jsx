import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../components/main.css'
import Toggler from "../components/Toggler"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <>
        <div className='container-fluid img-fondo vh-100 d-flex flex-column justify-content-between gap-3'>
            <div className="vh-25">
                <Navbar/>
                <Toggler/>
            </div>
            <div className="w-100 h-100">
                <Outlet/>
            </div>
            <Footer/>
        </div>

    </>
  )
}

export default RootLayout
