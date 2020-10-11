import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const ExcrusionEdit = () => {
    let location = useLocation();
    const history = useHistory();
    const isLogged = useSelector(state => state.logIn)
    if (!isLogged) { 
        history.push('/logIn')
    }
    const [Title, updateTitle] = useState(location.state.item.excTitle)
    const [Image, updateImage] = useState(location.state.item.excImageUrl)
    const [ImageFile, updateFile] = useState();
    const [Price, updatePrice] = useState(location.state.item.excPrice)
    const [Description, updateDescription] = useState(location.state.item.excDescription)
    const [Place, updatePlace] = useState(location.state.item.excPlace)
    const [Date, updateDate] = useState(location.state.item.excDate)
    const [booked, updateBooked] = useState(location.state.item.bookedSeats)
    const [Id, updateId] = useState(location.state.item.mainId)
    const [wasUpdated, updateWasUpdated] = useState(false)


    const handleEdit = () => {
        const excursion = {
            excTitle: Title,
            mainId: Id,
            excDate: Date,
            excPlace: Place,
            maxCap: 19,
            excDescription: Description,
            excImageUrl: Image,
            excPrice: Price,
            bookedSeats: booked
        }
        
        console.log(excursion)

        fetch('http://localhost:3001/updateExcursion', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(
                excursion                
            )
        }).then(res => res.json()).then()

        if (wasUpdated) {
            const h = new Headers();
            h.append('Accept', 'application/json')
            const fd = new FormData();
            fd.append('image', ImageFile, Image)

            fetch('http://localhost:3001/uploadImage', {
                method: 'post',
                headers: h,
                body: fd
            }).then(res => res.json()).then()
        }
    }

    const handleImageSelect = (event) => {
        const imageName = event.target.files[0].name;        
        updateImage(imageName);
        updateWasUpdated(true);
        updateFile(event.target.files[0])
    }
    
    const handleDelete = () => {
        fetch('http://localhost:3001/deleteExcursio', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {
                    mainId: Id
                }                
            )
        }).then(res => res.json()).then()
    }
  
    return (
        <div className="ma5 flex flex-column">                
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
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value= {Image}/>
            </div>
            <div className="dib">
                <label htmlFor="img" className="f6 b db mb2">Новая Картинка<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="file" onChange={event => handleImageSelect(event)}/>
            </div>
                <label htmlFor="price" className="f6 b db mb2">Дата<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Date} onChange={event => updateDate(event.target.value)}/>
           
            <div className="dib">
                <label htmlFor="price" className="f6 b db mb2">Место встречи<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={Place} onChange={event => updatePlace(event.target.value)}/>
            </div>       
            <div className="">
                <label htmlFor="date" className="f6 b db mb2">Описание<span className="normal black-60"></span></label>
                <textarea className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"  rows="15" value={Description} onChange={event => updateDescription(event.target.value)}/>
            </div>           
                <div>
                    <button className="" onClick={handleEdit}>Сохранить экскурсию</button>
                <button className="ml2" onClick={handleDelete}>Удалить экскурсию</button>   
                </div>   
            <div/>   
        </div>
    )
}

export default ExcrusionEdit