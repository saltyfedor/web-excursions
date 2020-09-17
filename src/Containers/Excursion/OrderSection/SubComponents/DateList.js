import React from 'react';

const DateList = ({handleDateClick, eTitle}) => {
    const dates = [
        {
         excName: "Dresden",
         excDate: "01.09.2020",
         excId: "4",
         maxCap: 19,
         bookedSeats: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2','C3']
    
        },
        {
         excName: "Dresden",
         excDate: "08.09.2020",
         excId: "5",
         maxCap: 19,
         bookedSeats: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1']
        },
        {
            excName: "Dresden",
            excDate: "15.09.2020",
            excId: "6",
            maxCap: 19,
            bookedSeats: ['A1', 'A2', 'A3', 'B1', 'B2']
        },
        {
            excName: "Dresden",
            excDate: "21.09.2020",
            excId: "7",
            maxCap: 19,
            bookedSeats: ['A1', 'A2', 'A3']
        }
    ];
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