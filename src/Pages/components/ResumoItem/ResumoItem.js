import React from 'react'
import './ResumoItem.css';

function ResumoItem({title, Icon, value}) {
  return (
   
    <div className="ContainerItem">
        <div className="HeaderItem">
            <p className="HeaderItem__title">{title}</p>
            <Icon/>
        </div>
        <div className="Total">{value}</div>
    </div>
   
  )
}

export default ResumoItem