import React, {Component} from 'react';
import './Title.css';

const Title = (props) => {
   
        const source = props.eImage;
        return (
            <div className="title-container">
            <header className = "flex">
                <p className = "f2 b">{props.eTitle}</p>
            </header>
            <div>
                    <img src={require(`../../../Images/${source}`)} className="title-image"></img>                                                                      
            </div>
            </div>    
        )
    
}

export default Title;

