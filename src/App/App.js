import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from '../Containers/Home/Home.js';
import Navigation from '../Containers/Navigation/Navigation.js'
import Excursions from '../Containers/ExcursionsPage/Excursions.js';
import Excursion from '../Containers/Excursion/Excursion.js';
import Admin from '../Containers/Admin/Admin.js';
import DateEdit from '../Containers/Admin/Edit/DateEdit.js'
import DateCreate from '../Containers/Admin/Create/DateCreate.js'
import ExcursionEdit from '../Containers/Admin/Edit/ExcursionEdit'
import CreateExcursion from '../Containers/Admin/Create/CreateExcursion'
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      
    }
  };

  render(){
      return(
        <div>
          <Navigation/>
          <Route path="/" exact component={() => <Excursions/>}/>       
          <Route path="/excursions/:name" component={Excursion} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/date/edit/:name" component={DateEdit} />
          <Route path="/admin/date/new" component={DateCreate} />
          <Route path="/admin/excursion/edit/:name" component={ExcursionEdit} />
          <Route path="/admin/excursion/new/" component={CreateExcursion} />
        </div>
      )
  }
   
}

export default App;

