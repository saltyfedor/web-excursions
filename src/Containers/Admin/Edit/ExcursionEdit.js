import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ExcrusionEdit = () => {
    let location = useLocation();

    const [Title, updateTitle] = useState(location.state.item.excTitle)
    const [Image, updateImage] = useState(location.state.item.excImageUrl)
    const [Price, updatePrice] = useState(location.state.item.excPrice)
    const [Description, updateDescription] = useState(location.state.item.excDescription)
    const [Id, updateId] = useState(location.state.item.mainId)
    
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
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Image} />
                <button className="mb2">Загрузить</button>   
            </div>     
            <div className="">
                <label htmlFor="date" className="f6 b db mb2">Описание<span className="normal black-60"></span></label>
                <textarea className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"  rows="15" value={Description} onChange={event => updateDescription(event.target.value)}/>
            </div>           
                <div>
                    <button className="">Сохранить экскурсию</button>
                    <button className="ml2">Удалить экскурсию</button>   
                </div>   
            <div/>   
            </div>
        </div>
    )
}

export default ExcrusionEdit