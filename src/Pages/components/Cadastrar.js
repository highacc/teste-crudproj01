import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Cadastrar.css";

function Cadastrar() {

  const baseUrl = (`https://olavo-todolistc15md04-jsonserv.herokuapp.com/todos`);

  const [descricao, setDescricao] = useState("");
  const [item, setItem] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [comentario, setComentario] = useState("");

  const navigate = useNavigate();

  const data = {
    descricao: descricao,
    item: item,
    valor: valor,
    vencimento: vencimento,
    pagamento: pagamento,
    comentario: comentario
  };

  function Submit(e){
    e.preventDefault();

    axios.post(baseUrl, data)
    .then(navigate('/'))
  }

  return (
    <div className="cadastrar__container">
      <h2>Cadastro de Conta</h2>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Descrição
        </span>
        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Ex. Padaria"
          aria-label="Ex.Padaria"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Item
        </span>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Ex. Pão"
          aria-label="Ex.Pão"
          aria-describedby="basic-addon2"
        ></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Valor</span>
        <span className="input-group-text">R$</span>
        <input
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          type="text"
          placeholder="10.00 "
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        ></input>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Vencimento</span>
        <input
          value={vencimento}
          onChange={(e) => setVencimento(e.target.value)}
          type="text"
          className="form-control"
          placeholder="00/00/2000"
          aria-label="Vencimento"
        ></input>
        <span className="input-group-text">Pagamento</span>
        <input
          value={pagamento}
          onChange={(e) => setPagamento(e.target.value)}
          type="text"
          className="form-control"
          placeholder="00/00/2000"
          aria-label="Pagamento"
        ></input>
      </div>

      <div className="input-group">
        <span className="input-group-text">Comentário</span>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="form-control"
          placeholder="Ex. Caro"
          aria-label="With textarea"
        ></textarea>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={Submit}
          className="btn text-black btn-outline-success me-2 btn__cadastrar"
          type="button"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastrar;
