import React, {Component} from 'react';
import Title from './Title/Title.js';
import Description from './Description/Description.js';
import OrderSection from './OrderSection/OrderSection.js';
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
            <div className="excursion">
            <Title eTitle={this.state.excTitle} eDate={this.state.excDate} ePrice={this.state.excPrice} eImage={this.state.excImageUrl} eCap={this.state.maxCap} />
            <div className="contentA">
            <Description eDescription = {this.state.excDescription}/>
            <OrderSection eTitle={this.state.excTitle} ePrice={this.state.excPrice} eDate={this.state.excDate} eCap={this.state.maxCap} eBooked={this.state.bookedSeats} />
            </div>  
          </div>
          </div>
            );
    }
        
}     


export default Excursion;



                      


