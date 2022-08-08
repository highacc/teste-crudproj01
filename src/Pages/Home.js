import axios from "axios";
import React, { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const baseUrl = "https://olavo-todolistc15md04-jsonserv.herokuapp.com/todos";

  const [users, setUsers] = useState([]);

  const loadContas = () => {
    axios.get(baseUrl).then((response) => {
      setUsers(response.data.reverse());
    });
  };

  useEffect(() => {
    loadContas();
  }, [users]);

  function Delete(id) {
    axios.delete(`${baseUrl}/${id}`).then(loadContas());
  }

  return (
    <>
    <h1 className="title">Contas a Pagar</h1>
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
              <th scope="row" className=" text-lg py-3">
                {index + 1}
              </th>
              <td className=" text-lg  py-3">{conta.descricao}</td>
              <td className=" text-lg  py-3">R${conta.valor}</td>
              <td className=" text-lg  py-3">{conta.vencimento}</td>
              <td className=" buttons-column flex justify-center space-x-5 mt-1 py-3">
                <Link
                  to={`/todos/${conta.id}`}
                  className=" btn btn-outline-success "
                >
                  {/*  View */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Link>
                <Link
                  to={`/edit-conta/${conta.id}`}
                  className="btn btn-outline-primary"
                >
                  {/* Edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Link>
                <button
                  onClick={() => Delete(conta.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  {/* Delete */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Home;
