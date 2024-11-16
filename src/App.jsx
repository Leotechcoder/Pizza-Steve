
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATH } from './Routes/PATH'
import RootLayout from './Routes/Rootlayout'
import Inicio from './Pages/Inicio'
import Casa from './Pages/Casa'
import Carta from './Pages/Carta'
import Error from './Pages/Error'
import Description from './Pages/Description'
import Payment from './Pages/Payment'

const router = createBrowserRouter(
  [{
    path: '/',
      element: <RootLayout/>,
      errorElement: <Error/>,
      
      children:[ 
        { path: PATH.inicio, element: <Inicio/> }, 
        {path: PATH.casa, element: <Casa/> },
        { path: PATH.carta, element: <Carta/>},
        {path: PATH.error, element: <Error/>}
        
        
      ]},
      { path: PATH.descripcion, element: <Description/>},
      { path: PATH.payment, element: <Payment/>},

  
  ]
)

const App = () => {
  return (
    <>
     
     <RouterProvider router={router}/>
    
    </>
  )
}

export default App
