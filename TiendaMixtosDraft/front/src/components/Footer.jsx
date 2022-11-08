import React from 'react'

export const Footer = () => {
  return (
    <div className="container">
      <div className="piep">
        <footer className="py-3 my-4">
         
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Horarios</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Ubicacion</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Menu</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contáctenos</a></li>
            </ul>
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
         
        </footer>
      </div>
    </div>
  )
}