import React from 'react';
import Logo from "../images/logo.png";
import "../styles/header.css";

const Header = () =>{
    return(  
        <div className="header">
            <h1>Course Overview</h1>
            <img src={Logo}/>
        </div>
        
    );

}

export default Header;

//<button><img alt="test" src="/images/React Cover.jpg" onClick={""}/></button>