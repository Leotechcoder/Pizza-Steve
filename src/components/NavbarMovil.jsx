import './navbarmovil.css'

const NavbarMovil = () => {
  return (
    
    <nav className="w-100 navbar bg-body-transparent container-fluid">
    <div className="w-100 d-flex">
      <form className="w-100 d-flex justify-content-end gap-3" role="search">
        <input className="form-control input" type="search" placeholder="Que vas a pedir?" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
  )
}

export default NavbarMovil
