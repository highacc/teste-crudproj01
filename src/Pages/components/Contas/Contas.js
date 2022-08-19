import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './Contas.css';
import Modal from '../modal/Modal';

function Contas( closeModal) {
  const {id} = useParams()

    const baseUrl = (`https://olavo-todolistc15md04-jsonserv.herokuapp.com/todos/${id}`);

  const [conta, setUser] = useState([]);

  useEffect(() => {

    axios.get(baseUrl)
    .then((response) =>{
        setUser(response.data);
        

    });
}, []);


  
  return (
    <Modal closeModal={closeModal}>
    <div className= 'conta__container'>
      
      {conta && (
        <>
        <h1>Conta</h1>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Descrição</span>
  <input type="text" className="form-control" value={conta.descricao} aria-label="Ex.Padaria" aria-describedby="basic-addon1"></input>
</div>

<div className="input-group mb-3">
<span className="input-group-text" id="basic-addon2">Item</span>
  <input type="text" className="form-control" value={conta.item} aria-label="Ex.Pão" aria-describedby="basic-addon2"></input>
 
</div>


<div className="input-group mb-3">
  <span className="input-group-text">Valor</span>
  <span className="input-group-text">R$</span>
  <input type="text" value={conta.valor} className="form-control" aria-label="Amount (to the nearest dollar)"></input>
  
</div>

<div className="input-group mb-3">
  <span className="input-group-text">Vencimento</span>
  <input type="text" className="form-control" value={conta.vencimento} aria-label="Vencimento"></input>
  <span className="input-group-text">Pagamento</span>
  <input type="text" className="form-control" value={conta.pagamento} aria-label="Pagamento"></input>
</div>

<div className="input-group">
  <span className="input-group-text">Comentário</span>
  <textarea className="form-control" value={conta.comentario} aria-label="With textarea"></textarea>
</div>

        </>


      )}
      
      
    </div>
    </Modal>
  )
}

export default Contas