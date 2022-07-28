import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-black">
    <form className="container-fluid justify-between">
      <button className="btn btn-outline-secondary text-white font-bold" type="button">TodoList</button>
      <Link to="add-conta" className="btn text-white btn-outline-success me-2" type="button">Cadastrar</Link>
      
    </form>
  </nav>
  )
}

export default Navbar