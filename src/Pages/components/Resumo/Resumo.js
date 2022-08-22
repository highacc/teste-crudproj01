import React from 'react'
import './Resumo.css';
import ResumoItem from '../ResumoItem/ResumoItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

function Resumo() {
  return (
    <div className="container">
        <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value= {1000}/>
        <ResumoItem title="Saídas" Icon={FaRegArrowAltCircleDown} value= {1000}/>
        <ResumoItem title= "Total" Icon={FaDollarSign} value= {1000}/>
    </div>
  )
}

export default Resumo