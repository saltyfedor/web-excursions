import React from 'react';
import { Link, Route } from "react-router-dom";
import './Navigation.css'

const Navigation = ({ match }) => {
        return ( 
            <nav  className ="navbar pr5 shadow-1" style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <Link to="/" className = 'f3 links dim white pa3 pointer'>Главная</Link>                            
                <Link to= "/admin" className = 'f3 links dim white pa3 pointer'>Вход</Link>
            </nav>
            );    
}     


export default Navigation;



   /* else if(currentRoute === 'admin'){
            return(
                <nav  className ="navbar pr5 shadow-1" style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <link to="/admin" className = 'f3 links dim white pa3 pointer'>Новая экскурсия</link>                
                    <link to="/excursion" className = 'f3 links dim white pa3 pointer'>Выход</link>
                </nav>
            );
        }
        else if(currentRoute === 'new'){
            return(
                <nav  className ="navbar pr5 shadow-1" style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <link to="/admin"className = 'f3 links dim white pa3 pointer'>Все Экскурсии</link>                
                    <link to="/excusrion" className = 'f3 links dim white pa3 pointer'>Выход</link>
                </nav>
            );
        } */