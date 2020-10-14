import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
        return ( 
            <nav  className ="navbar shadow-1" style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <Link to="/" className = 'f3 links pa3 dim white pointer'>Главная</Link>                            
                <Link to= "/admin" className = 'f3 links pa3 dim white pointer'>Вход</Link>
            </nav>
            );    
}     


export default Navigation;



