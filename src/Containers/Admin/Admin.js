import React, {useState, useEffect} from 'react';
import AdminDateList from './AdminDateList.js';
import AdminExcursionList from './AdminExcursionList.js'
import {Link} from 'react-router-dom'
import './admin.css'

const Admin = () => {
  const [list, updateList] = useState([]);
  const [dates, updateDates] = useState([]);
  const fetchList = () => {  
    fetch('http://localhost:3001/excursions').then(res => res.json()).then(data => updateList(data))    
  }
  const fetchDates = () => {  
    fetch('http://localhost:3001/excursionDates').then(res => res.json()).then(data => updateDates(data))    
  }
  useEffect(fetchList, list);
  useEffect(fetchDates, dates);


  return (
      <div className="w-50 center">
        <div className="">    
          <h2>Даты</h2>
            <div className="ba">            
                <AdminDateList dates={dates} excursionList={list}/>
            </div>           
        </div>
        <div className="mb4">        
          <h2>Экскурсии</h2>
          <div className="ba">
            <AdminExcursionList list= {list}/>
          </div>                 
        </div>
      </div>
    )
}

export default Admin;