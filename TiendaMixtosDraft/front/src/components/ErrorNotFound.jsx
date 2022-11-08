import React from 'react'
import error404 from '../images/error404.png'

export const ErrorNotFound = () => {
  return (
    <div className="container">
        <center>
            <br/>
            <h1>PAGINA NO ENCONTRADA</h1>
            <img src={error404} width="30%" alt="..."/>
        </center>
    </div>
  )
}
