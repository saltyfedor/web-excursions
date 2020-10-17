import React from 'react'
import { Link } from 'react-router-dom';
import './ExcursionCard.css'

const ExcursionCard = (props) => {
    return (
    <Link to = {`/excursions/${props.eTitle}/${props.itemId}`} className = "excTitle ba bw ma3 grow" >
        <div className="flex flex-column">
                <img className ="cardImg" src={`http://localhost:3001/images/${props.eImage}`} alt="excursion image"></img>
                <h3 className="ml3 white">{props.eTitle}</h3>    
        </div>       
    </Link>
        
    )

}

export default ExcursionCard


