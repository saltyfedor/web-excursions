import React from 'react';
import './Description.css'

const Description = ({eDescription}) => {
    return ( 
            <div className="description">
            <p className="f3 mid-gray lh-copy">{eDescription}</p>
            </div>
    );
}

export default Description;
