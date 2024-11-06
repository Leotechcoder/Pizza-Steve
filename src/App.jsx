
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import Casa from './Pages/Casa'
import Carta from './Pages/Carta'
import Error from './Pages/Error'
import { PATH } from './Routes/PATH'
import RootLayout from './Routes/Rootlayout'
import Description from './Pages/Description'

const router = createBrowserRouter(
  [{
    path: '/',
      element: <RootLayout/>,
      errorElement: <Error/>,
      
      children:[ 
        { path: PATH.inicio, element: <Inicio/> }, 
        {path: PATH.casa, element: <Casa/> },
        { path: PATH.carta, element: <Carta/>},
        
        
      ]},
      { path: PATH.descripcion, element: <Description/>},
  
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
