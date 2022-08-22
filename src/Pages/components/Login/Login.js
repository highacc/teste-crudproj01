import React from 'react'
import './Login.css';
import Modal from '../modal/Modal';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(closeModal) {
/* 
    const baseUrl = (`https://olavo-todolistc15md04-jsonserv.herokuapp.com/todos`);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const data = {
        email: email,
        senha: senha
      };

    function Submit(e){
        e.preventDefault();
    
        axios.post(baseUrl, data)
        .then(navigate('/'))
      } */
  return (
    <Modal closeModal={closeModal}>
    <div className= "cadastrar__container">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email </label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Senha</label>
        </div>
        <button
          /* onClick={Submit} */
          className="btn text-black btn-outline-success me-2 btn__cadastrar"
          type="button"
        >
          Cadastrar
        </button>
    </div>
    </Modal>
  )
}

export default Login

