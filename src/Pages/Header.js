import React from "react";

function Header(params){

    return (<div className="container">
        <h1>ESTO ES UN HEADER </h1>
        <h2>{params.value}</h2>
        <p>
            {params.value}
        </p>
        </div>);
}

export default Header;