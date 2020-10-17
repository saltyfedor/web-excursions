import { combineReducers } from 'redux';
import excurisonId from './excursionId.js';
import orderId from './orderId.js';
import orderFirstName from './orderFirstName.js';
import orderPhone from './orderPhone.js';
import orderEmail from './orderEmail.js';
import orderSeats from './orderSeats.js';
import excBooked from './excBooked.js';
import isDateSelected from './isDateSelected'
import logIn from './logIn.js';

const allReducers = combineReducers({
    excurisonId, orderId, orderFirstName, orderPhone, orderEmail, orderSeats, excBooked, isDateSelected, logIn
})

export default allReducers;