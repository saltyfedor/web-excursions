import React, {useState, useEffect} from 'react';
import AdminExcursionList from './AdminExcursionList.js'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import './admin.css'

const Admin = () => {
  const [list, updateList] = useState([]);
  const history = useHistory();
  const isLogged = useSelector(state => state.logIn)
  if (!isLogged) { 
    history.push('/logIn')
  }
  const fetchList = () => {  
    fetch('http://localhost:3001/excursions').then(res => res.json()).then(data => updateList(data))    
  }
 
  useEffect(fetchList, list);


  return (
      <div className="w-50 center">
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