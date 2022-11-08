import React from 'react'
import card1 from '../images/1Calentao-Valluno.jpg'
import card2 from '../images/2Calentao-Cachaco.jpg'
import card3 from '../images/3Calentao-Paisa.jpg'

export const ContentMenu = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            <div className="col">
                <div className="card">
                <img src={card1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">CALENTAO VALLUNO</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Arroz, papa, chorizo,  maduro, carne desmechada.</p>
                    <p><a className="btn btn-secondary" href="#">COMPRAR</a></p>
                </div>
                </div>
            </div>
           
           
            <div className="col">
                <div className="card">
                <img src={card2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">CALENTAO CACHACO</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Arroz, papa, Lenteja,  carne de cerdo en trozos,  tocineta, cebolla grille</p>
                    <h6 className='precioProducto'>Precio: &nbsp; &nbsp;&#60; 8000</h6>
                    <p><a className="btn btn-secondary" href="#">COMPRAR</a></p>
                </div>
                </div>
            </div>
            
            
            <div className="col">
                <div className="card">
                <img className="rounded-circle card-img-top" width="250" height="350" src={card3} alt="..." />  
                <div className="card-body">
                    <h5 className="card-title">CALENTAO PAISA</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Arroz, papa, frijol, chorizo,  maduro, carne desmechada.</p>
                    <p><a className="btn btn-secondary" href="#">COMPRAR</a></p>
                </div>
                </div>            
            </div>


        </div>
    </div>
  )
}
