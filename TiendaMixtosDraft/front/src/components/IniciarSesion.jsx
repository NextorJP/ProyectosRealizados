import React, { useState, useEffect } from 'react'

export const IniciarSesion = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registros, setRegistros] = useState(obtenerRegistros());

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { nombre, correo, mensaje }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }

  function botonGuardarSimple(e){
    e.preventDefault();
    var miObjeto = { nombre, correo, mensaje }
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }


  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setMensaje("");
    document.getElementById("miFormulario").reset();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros]);


  return (
      <center>
        <div className="container" style={{width:"30%", marginTop:30, background:"#FF7F00", padding:30}}>
            <form id="miFormulario" onSubmit={botonGuardarSimple}>
                <h1 className='h1'>Administrador</h1>
                <input style={{marginBottom:20}} className="form-control form-control-lg" type="text" placeholder="Digite su Usuario" onChange={(e)=>setNombre(e.target.value)} />
                <input style={{marginBottom:20}} className="form-control form-control-lg" type="email" placeholder="Digite su Contraseña" onChange={(e)=>setCorreo(e.target.value)} />
                <button className='btn btn-primary btn-lg'>
                    ENTRAR
                </button>
            </form>
        </div>
    </center>
  )
}
