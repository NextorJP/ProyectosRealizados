import React, { Component } from 'react'
import axios from 'axios'

export default class ActualizarProductos extends Component {
    state = {
        productos: [],
        name:'',
        editar:false,
        _id:'',
        _price:'',
        _description:''
        
    }

    async componentDidMount() {
        this.getProductos();
        //console.log(rest);
        //console.log(this.state.productos);
    }

    getProductos=async () =>{
    const rest = await axios.get('http://localhost:3000/products');
    this.setState({ productos: rest.data });
    }
    
    onChangeName = (e) => {
	//console.log(e.target.value)
    this.setState({name:e.target.value});           
    }

    onChangePrice = (e) => {
        //console.log(e.target.value)
        this.setState({_price:e.target.value});           
        }

    onChangeDescription = (e) => {
        //console.log(e.target.value)
        this.setState({_description:e.target.value});           
        }
    
    onClean =() => {
        this.setState({ 
            name:'',
            _price:'',
            _description:'',
            editar:false
        }); 
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editar){
            await axios.put('http://localhost:3000/products/'+this.state._id,{
                name:this.state.name,
                price:this.state._price,
                description:this.state._description
            });
            }
        else{
            await axios.post('http://localhost:3000/products',{
                name:this.state.name,
                price:this.state._price,
                description:this.state._description
            });
        }
        this.getProductos();
        this.onClean();
        //console.log(res)
        
    }

    deleteUser= async (id) => {
        //console.log(id);
        await axios.delete('http://localhost:3000/products/'+id);
        this.getProductos();
    }

    cargarDatosProducto= async (id,name,price,description) =>{
        //console.log(id+'-'+name+'-'+price+'-'+description);
        this.setState({
            _id:id         ,
            name:name,
            _price:price ,
            _description:description ,
            editar: true
        });
        console.log(this.state._id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> CRUD de Productos </h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="container p-2">
                                <h6> Nombre: </h6>
                                <input type="text" className="form control" value={this.state.name} onChange={this.onChangeName}/>
                                </div>
                                <h6> Precio: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" value={this.state._price} onChange={this.onChangePrice}/>
                                </div>
                                <h6> Descripcion: </h6>
                                <div className="container p-2">
                                <input type="text" className="form control" value={this.state._description} onChange={this.onChangeDescription}/>
                                </div>
                            </div>
                            <div className="container p-4">
                            <button type="submit" className="btn btn-primary">
                                GUARDAR
                            </button>
                            <div className="container p-2">
                            <button type="reset" className="btn btn-primary" onClick={()=>this.onClean()}>
                                LIMPIAR
                            </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.productos.map(producto => (
                                <li 
                                    className="list-group-item list-group-item-action" 
                                    key={producto.id} 
                                    onDoubleClick={()=>this.deleteUser(producto.id)} 
                                    onClick={()=>this.cargarDatosProducto(producto.id,producto.name,producto.price,producto.description)}>
                                    {producto.name}
                                </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
