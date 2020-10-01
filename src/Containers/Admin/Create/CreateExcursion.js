import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const CreateExcursion = () => {
    const history = useHistory();
    const isLogged = useSelector(state => state.logIn)
    if (!isLogged) { 
      history.push('/logIn')
    }

    const [Title, updateTitle] = useState('')
    const [Image, updateImage] = useState('')
    const [Price, updatePrice] = useState('')
    const [Date, updateDate] = useState('')
    const [Place, updatePlace] = useState('')
    const [Description, updateDescription] = useState('')

    return (
        <div className="">
        <div className = "ma5 flex flex-column">            
            <div className="dib">
                <label htmlFor="name" className="f6 b db mb2">Экскурсия<span className="normal black-60"></span></label>
                    <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Title} onChange={event => updateTitle(event.target.value)}/>
            </div>
            <div className="dib">
                <label htmlFor="price" className="f6 b db mb2">Цена<span className="normal black-60"></span></label>
                    <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Price} onChange={event => updatePrice(event.target.value)}/>
            </div>
            <div className="dib">
                <label htmlFor="img" className="f6 b db mb2">Картинка<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text"/>
                <button className="mb2">Загрузить</button>   
            </div>
            <div className="dib">
                <label htmlFor="price" className="f6 b db mb2">Дата<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Date} onChange={event => updateDate(event.target.value)}/>
            </div>
            <div className="dib">
                <label htmlFor="price" className="f6 b db mb2">Место встречи<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Place} onChange={event => updatePlace(event.target.value)}/>
            </div>      
            <div className="">
                <label htmlFor="date" className="f6 b db mb2">Описание<span className="normal black-60"></span></label>
                <textarea className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"  rows="15" value={Description} onChange={event => updateDescription(event.target.value)}/>
            </div>           
                <div>
                    <button className="">Сохранить экскурсию</button>                
                </div>   
            <div/>   
            </div>
        </div>
    )

}

export default CreateExcursion