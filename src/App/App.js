import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Navigation from '../Containers/Navigation/Navigation.js'
import Excursions from '../Containers/ExcursionsPage/Excursions.js';
import Excursion from '../Containers/Excursion/Excursion.js';
import Admin from '../Containers/Admin/Admin.js';
import ExcursionEdit from '../Containers/Admin/Edit/ExcursionEdit'
import CreateExcursion from '../Containers/Admin/Create/CreateExcursion'
import SignIn from '../Containers/Admin/Authentification/SignIn.js';
import Footer from '../Containers/Footer/Footer.js';
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
          <div className="app-main">
          <Navigation />
          <Route path='/logIn' component={SignIn}/>
          <Route path="/" exact component={() => <Excursions/>}/>       
          <Route path="/excursions/:name/:id" component={Excursion} />
          <Route path="/admin" exact component={Admin} />         
          <Route path="/admin/excursion/edit/:name" component={ExcursionEdit} />
          <Route path="/admin/excursion/new/" component={CreateExcursion} />
          </div>
          <Footer />
        </div>
      )
  }
   
}

export default App;

