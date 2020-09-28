import React, {useState, useEffect} from 'react';

const DateList = ({handleDateClick, eTitle}) => { 
    const [dates, updateDates] = useState([]);
    const fetchDates = () => {  
        fetch('http://localhost:3001/excursionDates').then(res => res.json()).then(data => updateDates(data))    
    }
    useEffect(fetchDates, dates);

    const itemList = dates.map((item) =>{
        return (
            <p className="br-pill ba pa2" key={item.excId} onClick={() => handleDateClick(item)}>
            {`${eTitle} - ${item.excDate}, свободных мест : ${item.maxCap - item.bookedSeats.length}`}
            </p>
        )
    });

    return itemList;

}

export default DateList;