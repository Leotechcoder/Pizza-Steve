import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from "../Routes/PATH"
import './sidebar.css'

// Asume que estos componentes serán importados de otra librería
// import { HouseDoor, Gear, Envelope, Bell, Calendar, Person } from 'tu-libreria-de-iconos';


const menuItems = [
  { icon: <HomeIcon className="me-3" size={20}/>, label: 'Inicio', path: PATH.inicio },
  { icon: <SettingsIcon className="me-3" size={20}/>, label: 'Nosotros', path: PATH.casa },
  { icon: <MailIcon className="me-3" size={20}/>, label: 'Nuestra carta', path: PATH.carta },
  { icon: <LocalOfferIcon className="me-3" size={20}/>, label: 'Ofertas', path: PATH.error},
  { icon: <LocationOnIcon className="me-3" size={20}/>, label: 'Local', path: PATH.error },
];



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div 
      className={`d-none d-lg-flex flex-column flex-shrink-0 bg-dark text-white transition ${isOpen ? 'w-250px' : 'w-80px'}`}
      style={{ transition: 'width 0.3s ease' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="d-flex flex-column h-100">
        <ul className=" flex-column mb-auto p-2">
          {menuItems.map((item) => (
            
            <Link key={item.label} to={item.path} className='link-sidebar'>
                  <li className="nav-item item-sidebar">
                      <span
                      className="label-sidebar d-flex align-items-center py-2"
                      >
                          {item.icon}
                          {isOpen && <span>{item.label}</span>}
                      </span>
                  </li>
            </Link>
          ))}
        </ul>
        <div className="dropdown border-top">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle p-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            {/* Aquí deberías renderizar el componente del icono de usuario */}
            {/* <Person className="me-2" size={32} /> */}
            {isOpen && <strong>Usuario</strong>}
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#">Configuración</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;