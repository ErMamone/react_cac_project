import React, { useState } from "react";

function DataForm(params){
    const [nombre, setNombre] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechaDeIngreso, setFechaDeIngreso] = useState("");
    const [proveedor, setProveedor] = useState("");

    const getNombre = (e) => {
        setNombre(e.target.value);
    };

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
        console.log(nombre, producto, cantidad, fechaDeIngreso, proveedor);
        return params;
    };

    return sendForm;
}

export default DataForm;