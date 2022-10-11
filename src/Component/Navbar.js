import React from "react";
import {NavLink} from 'react-router-dom';


const Navbar = (props) => {

 
return(
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>/
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-Link  a" aria-current="page" to="/" style={{textDecoration:"none"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-Link a" to="/about" style={{textDecoration:"none" ,marginLeft:"10px"}}>About Us</NavLink>
        </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?"ldark":'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>

</>
)

}
export default Navbar;