import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Función de manejo de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí agregas tu lógica para autenticar al usuario (puede ser con una API)
    if (email === "cliente@example.com" && password === "cliente123") {
      // Redirige al cliente
      navigate("/cliente/carta");
    } else if (email === "admin@example.com" && password === "admin123") {
      // Redirige al panel de administración
      navigate("/admin");
    } else {
      // Si las credenciales son incorrectas, mostramos un mensaje de error
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Iniciar sesión</h3>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Introduce tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Introduce tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Iniciar sesión
              </button>
            </form>

            <div className="mt-3 text-center">
              <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
