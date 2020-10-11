import React, {useState, useEffect } from 'react';
import ExcursionCard from './ExcursionCard.js';
import './Excursions.css'


const Excursions = () => {
  const [list, updateList] = useState([]);
  const fetchList = () => {  
    fetch('http://localhost:3001/excursions').then(res => res.json()).then(data => updateList(data))    
  }
  useEffect(fetchList, list);
  
  const cardList = list.map((item) => {   
    return (
      <ExcursionCard eTitle={item.excTitle} eImage={item.excImageUrl} itemId={item.mainId}/>
    )
  }
      );
      return (
        <div className = "container">
          {cardList}
        </div>
    )
}

export default Excursions;


