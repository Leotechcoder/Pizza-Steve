import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../components/main.css'

const RootLayout = () => {
  return (
    <>
        <div className='img-fondo'>
            <div className="vh-25">
                <Navbar/>
            </div>
            <div className="vh-75">
                <Outlet/>
            </div>
        </div>

    </>
  )
}

export default RootLayout
