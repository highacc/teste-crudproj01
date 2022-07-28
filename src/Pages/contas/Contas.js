import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import '../contas/Contas.css';

function Contas() {
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
    <div className= 'conta__container align-self-center'>
      
      {conta && (
        <>
        <h1>Cadastrar Conta</h1>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Descrição</span>
  <input type="text" className="form-control" placeholder="Ex.Padaria" aria-label="Ex.Padaria" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<span className="input-group-text" id="basic-addon2">Item</span>
  <input type="text" className="form-control" placeholder="Ex.Pão" aria-label="Ex.Pão" aria-describedby="basic-addon2"/>
 
</div>


<div className="input-group mb-3">
  <span className="input-group-text">Valor</span>
  <span className="input-group-text">R$</span>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
  
</div>

<div className="input-group mb-3">
  <span className="input-group-text">Vencimento</span>
  <input type="date" className="form-control" placeholder="Vencimento" aria-label="Vencimento"/>
  <span className="input-group-text">Pagamento</span>
  <input type="date" className="form-control" placeholder="Pagamento" aria-label="Pagamento"/>
</div>

<div className="input-group">
  <span className="input-group-text">Comentário</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>

        </>


      )}
      
      
    </div>
  )
}

export default Contas