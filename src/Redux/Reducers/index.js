import { combineReducers } from 'redux';
import orderName from './orderName.js';
import orderId from './orderId.js';
import orderFirstName from './orderFirstName.js';
import orderLastName from './orderLastName.js';
import orderPhone from './orderPhone.js';
import orderEmail from './orderEmail.js';
import orderSeats from './orderSeats.js';
import excBooked from './excBooked.js';
import isDateSelected from './isDateSelected'

const allReducers = combineReducers({
    orderName, orderId, orderFirstName, orderLastName, orderPhone, orderEmail, orderSeats, excBooked, isDateSelected
})

export default allReducers;