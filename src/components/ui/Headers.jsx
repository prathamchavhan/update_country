import { NavLink } from "react-router-dom";
import "./Headers.css";
export const Headers =()=>{
    return (
    <>
   <header>
  <div className="container">
    <div className="navbar-grid">
      
    
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">contact</NavLink></li>
          <li><NavLink to="/Countryo">Countryo</NavLink></li>
        </ul>
      </nav>

  
      <div className="logo">
        <NavLink to="/">
          <h1>world affair</h1>
        </NavLink>
      </div>
    </div>
  </div>
</header>

    </>
);
};