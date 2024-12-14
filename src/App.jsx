import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATH } from './Routes/PATH'
import RootLayout from './Routes/Rootlayout'
import Casa from './Pages/Casa'
import Carta from './Pages/Carta'
import Error from './Pages/Error'
import Description from './components/Precarrito'
import Payment from './Pages/Payment'
import Login from './Pages/Login' // Página de inicio de sesión
import AdminDashboard from './Pages/AdminDashboard' // Panel de administración
import GestionarProductos from './components/GestionarProductos'
import GestionarPedidos from './components/GestionarPedidos'

// Configuración de rutas
const router = createBrowserRouter([
  

  { path: PATH.login, element: <Login /> }, // Ruta para login
  {
    path: PATH.cliente, 
    element: <RootLayout />,  // Vista de cliente, será la página raíz para los clientes
    children: [
      
          { path: PATH.inicio, element: <Carta /> },
          { path: PATH.casa, element: <Casa /> },
          { path: PATH.error, element: <Error /> },
       
      { path: PATH.descripcion, element: <Description /> },
      { path: PATH.payment, element: <Payment /> },
    ]
  },

  { path: PATH.admin, 
    element: <AdminDashboard />,
    children: [
    { path: "gestionar-productos", element: <GestionarProductos /> }, // Componente para gestionar productos
    { path: "gestionar-pedidos", element: <GestionarPedidos /> } // Componente para gestionar pedidos
] }, // Ruta para el dueño
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
