import React, { useState } from "react";

const maxNumber = Number.MAX_VALUE;

function DataForm(params){
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechaDeIngreso, setFechaDeIngreso] = useState("");
    const [proveedor, setProveedor] = useState("");

    const getProducto = (e) => {
        setProducto(e.target.value);
    };

    const getCantidad = (e) => {
        setCantidad(e.target.value);
    };

    const getFechaDeIngreso = (e) => {
        setFechaDeIngreso(e.target.value);
    };

    const getProveedor = (e) => {
        setProveedor(e.target.value);
    };
    
    const sendForm = (e) => {
        e.preventDefault();
        console.log(producto, cantidad, fechaDeIngreso, proveedor);
    };


    return (
        <div className="container">
        <h1>Datos a ingresar:</h1>
        <p>
            Ingresar los datos de los productos ingresados
        </p>
        <form className="forn-group" onSubmit={sendForm}>
            <div className="mb-5">
                <label className="form-label">Nombre del producto</label>
                <input
                    type="text"
                    className="form-control"
                    id="producto"
                    onChange={getProducto}/>
            </div>
            <div>
            <label className="form-label">Cantidad</label>
            <input
                onChange={getCantidad}
                className="form-control"
                type="number"
                min="1"
                max={maxNumber}
                id="cantidad"
                placeholder="Cantidad:"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de ingreso</label>
                <input
                    onChange={getFechaDeIngreso}
                    type="date"
                    min="2000-01-01"
                    className="form-control"
                    id="fechaDeIngreso"/>
            </div>
            <div className="mb-5">
                <label className="form-label">Proveedor</label>
                <input
                    type="text"
                    className="form-control"
                    id="proveedor"
                    onChange={getProveedor}/>
            </div>
            <button type="submit" className="btn btn-primary">
                Generar ingreso
            </button>
        </form>
    </div>);
}

export default DataForm;