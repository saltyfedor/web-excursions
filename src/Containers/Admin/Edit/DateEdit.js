import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerList from './CustomerList.js';

const DateEdit = () => {
    let location = useLocation();
    const [date, setDate] = useState(location.state.item.excDate);
      
    return (
        <div className="flex justify-center">
        <div className = "ma3 flex flex-column">            
            <div className="dib">
                <label htmlFor="name" className="f6 b db mb2">Экскурсия<span className="normal black-60"></span></label>
                <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" value={location.state.item.excName} readonly/>
            </div>
            <div className="dib">
                <label htmlFor="date" className="f6 b db mb2">Дата<span className="normal black-60"></span></label>
                <input id="date" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <div className="dib">
                <label htmlFor="date" className="f6 b db mb2">Клиенты<span className="normal black-60"></span></label>   
                <div className="ba b--black-20 pa2 mb2 db w-100">
                        <CustomerList dateId={location.state.item.excId}/>
                </div> 
            </div>
                <div>
                    <button className="">Сохранить</button>
                    <button className="ml5">Удалить дату</button>   
                </div>   
            <div/>   
            </div>
        </div>
    );
}

export default DateEdit;