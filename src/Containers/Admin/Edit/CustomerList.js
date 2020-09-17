import React, {useState, Component} from 'react';
import Customer from './Customer.js'




class CustomerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }   

    handleRemoveClick = (customerId) => {
        const newCustomers = this.state.customers.filter(customer => {
            return customer.id !== customerId
        })        
        
        this.setState({customers: newCustomers})
    }

    restoreCustomers = () => {
        const oldCustomerList = [
            {
                name: 'Andrei',
                id: 1,
                seats: 'A1, A2'
                
            },
            {
                name: 'Sally',
                id: 2,
                seats: 'B1, C1' 
            },
            {
                name: 'Molly',
                id: 3,
                seats: 'E1, F1'
            }
        ];
        this.setState({customers : oldCustomerList});
    }

    updateCustomerList = () => {
        console.log(`updatin date id ${this.props.dateId}`);
    }

    componentDidMount() {      
        let customers = [
            {
                name: 'Andrei',
                id: 1,
                seats: 'A1, A2'
                
            },
            {
                name: 'Sally',
                id: 2,
                seats: 'B1, C1' 
            },
            {
                name: 'Molly',
                id: 3,
                seats: 'E1, F1'
            }
        ];
        this.setState({customers: customers});        
    }
    
    
    render() {
        const customerList = this.state.customers.map(customer => {
            return <Customer
                customer={customer}
                handleRemoveClick={this.handleRemoveClick} 
                handleEditClick={this.handleEditClick} />
        })
        
        return (
            <div>
                {customerList}
                <div className = "mt4">
                    <button onClick={this.updateCustomerList}>Save</button>
                    <button onClick={this.restoreCustomers} className = "ml2">Cancel</button>
                </div>
            </div>
        );
    }
}

export default CustomerList;