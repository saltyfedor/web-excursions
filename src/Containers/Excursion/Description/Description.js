import React from 'react';
import './Description.css'

const Description = ({eDescription}) => {
    return ( 
        <div className="description">
            <p className="f2 b black lh-copy mt0">О экскурсии :</p>
            <p className="f3 black lh-copy mt0">{eDescription}</p>
        </div>
    );
}

export default Description;
