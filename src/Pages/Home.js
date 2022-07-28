import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import './Home.css';


function Home() {

  const baseUrl = ("https://olavo-todolistc15md04-jsonserv.herokuapp.com/todos");

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get(baseUrl)
    .then((response) =>{
        setUsers(response.data);
        

    });


  }, []);



  return (
    <div className="container">

            
    <table className="table">
      <thead>
        <tr className="table-header ">
          <th scope="col">#</th>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Vencimento</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">

      {users.map((conta, index) => (
     
        <tr key={index}>
          <th scope="row" className=" text-lg py-3">{index + 1}</th>
          <td className=" text-lg  py-3">{conta.nome}</td>
          <td className=" text-lg  py-3">R${conta.valor}</td>
          <td className=" text-lg  py-3">{conta.vencimento}</td>
          <td className=" buttons-column flex justify-center items-center space-x-4 mt-1">
            <Link to={`/todos/${conta.id}`} className= " px-6 py-2 text-white font-bold bg-black rounded-lg">
              View
            </Link>
            <button className= " px-6 py-2 text-white font-bold bg-blue-600 rounded-lg">
              Edit
            </button>
            <button className= " px-6 py-2 text-white font-bold bg-red-600 rounded-lg"> 
              Delete
            </button>
          </td>
        </tr>
       ))}  
        
      </tbody>
    </table>
    </div>
  )
}

export default Home