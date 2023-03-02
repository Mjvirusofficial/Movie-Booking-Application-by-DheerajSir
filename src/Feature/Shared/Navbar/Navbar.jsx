import { NavLink } from "react-router-dom"
import "./Navbar.css"
import img from '../Image/pvr.png'

export function Navbar(){

    return(
        <nav className=" bd navbar navbar-expand-lg bg-body-tertiary navbar-bg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
      <img className="logo" src={img} alt='img' />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item list ">
          <NavLink  className="nav-link active " aria-current="page" to='/'>Home</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Contact</NavLink>
        </li>
      </ul>
      <NavLink className="btn btn-primary float-end" to="/signup">Join Us</NavLink>
     
    </div>
  </div>
</nav>
    )
}