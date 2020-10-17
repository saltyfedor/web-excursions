import React, {useState, useEffect} from 'react';
import Title from './Title/Title.js';
import Description from './Description/Description.js';
import OrderSection from './OrderSection/OrderSection.js';
import About from './About/About.js';
import { loadBooked } from '../../Redux/Actions/index.js'
import { addExcursionId } from '../../Redux/Actions/index.js'
import store from '../../index.js'
import './excursionStyle.css';


const Excursion = (props) => {    

  const [excursion, updateExcursion] = useState({});  
  const fetchExcursion = () => {
    fetch(`http://localhost:3001/excursion/${props.match.params.id}`).then(res => res.json()).then(data =>
    {
      updateExcursion(data)
      store.dispatch(loadBooked(data.bookedSeats))
      store.dispatch(addExcursionId(data.mainId))      
    });
  } 

  useEffect(fetchExcursion, excursion);   
  
   
  return (
    <div className="body">            
      <Title eTitle={excursion.excTitle} eDate={excursion.excDate} ePrice={excursion.excPrice} eImage={excursion.excImageUrl} eCap={excursion.maxCap} />            
      <Description eDescription={excursion.excDescription} />
      <div className="buy-grid grey-b justify-center">              
        <OrderSection eTitle={excursion.excTitle} ePrice={excursion.excPrice} eDate={excursion.excDate} eCap={excursion.maxCap} eBooked={excursion.bookedSeats} />
        <About/ >
      </div>
    </div>
            );   
        
}     


export default Excursion;



                      


