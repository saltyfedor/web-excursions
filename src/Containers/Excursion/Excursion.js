import React, {Component} from 'react';
import Title from './Title/Title.js';
import Description from './Description/Description.js';
import OrderSection from './OrderSection/OrderSection.js';
import About from './About/About.js';
import './excursionStyle.css';


class Excursion extends Component {
    constructor(){
        super();
        this.state = {
        };
      };


  componentDidMount() {
    fetch(`http://localhost:3001/excursion/${this.props.match.params.name}`).then(res => res.json()).then(data => { this.setState(data) });
  } 
    
  render() {    
      return (
          <div className="body">            
            <Title eTitle={this.state.excTitle} eDate={this.state.excDate} ePrice={this.state.excPrice} eImage={this.state.excImageUrl} eCap={this.state.maxCap} />            
            <Description eDescription={this.state.excDescription} />
          <div className="buy-grid grey-b justify-center">              
            <OrderSection eTitle={this.state.excTitle} ePrice={this.state.excPrice} eDate={this.state.excDate} eCap={this.state.maxCap} eBooked={this.state.bookedSeats} />
            <About/ >
            </div>
          </div>
            );
    }
        
}     


export default Excursion;



                      


