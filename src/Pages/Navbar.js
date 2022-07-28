import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-black">
    <form className="container-fluid justify-between">
      <button className="btn btn-outline-secondary text-white font-bold" type="button">TodoList</button>
      <button className="btn text-white btn-outline-success me-2" type="button">Cadastrar</button>
      
    </form>
  </nav>
  )
}

export default Navbar