import React, {Component} from 'react';
import './Title.css';

const Title = (props) => {
   
        const source = 'dresden4.jpg';
        return (
            <div className="">
                <header className="title-section" style={
                    {                         
                        backgroundImage: `url(http://localhost:3001/images/${source})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        
                    }
                }>
                    <div className="title-content flex flex-column justify-end" style={
                        {
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white'
                        }
                    }>
                        <h1 className="title-text f1 b">{props.eTitle}</h1>
                        <p className="title-text f3" >{`Дата : ${props.eDate}`}</p>
                        <p className="title-text f3" >{`Мест : ${props.eCap}`}</p>
                        <p className="title-text f3" >{`Цена : ${props.ePrice}`}</p>
                    </div>        
            </header>            
            </div>    
        )
    
}

export default Title;

