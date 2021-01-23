import React from 'react';

const style = {
    padding: "2%",
    margin: "0 5%",
    textAlign: "center",
    fontSize: "22px",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "5px"
}

const Footer = () =>{

    // NOTE: El component footer solo hace render al montar.
    console.log("Render: footer component");

    return(
        <div style={style}>Footer component here ...</div>
    )
}

// NOTE: No es necesario un memo() dado que el Footer no esta suscrito al context el Theme
export default Footer;