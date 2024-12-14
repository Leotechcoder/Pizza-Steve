import React from "react";
import { Outlet, Link } from "react-router-dom"; // Outlet para cargar rutas hijas

const AdminDashboard = () => {
  return (
    <div>
      <header>
        <h1>Panel de Administración</h1>
        <nav>
          <ul>
            <li><Link to="/admin/gestionar-productos">Gestionar Productos</Link></li>
            <li><Link to="/admin/gestionar-pedidos">Gestionar Pedidos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
