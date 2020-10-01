export const addName = (name) => {
    return {
        type: 'ADD_NAME',
        name: name
    };
};

export const addId = (id) => {
    return {
        type: 'ADD_ID',
        id: id
    };
};

export const addEmail = (email) => {
    return {
        type: 'ADD_EMAIL',
        email: email
    };
};

export const addFirstName = (firstName) => {
    return {
        type: 'ADD_FIRST_NAME',
        firstName: firstName
    };
};

export const addLastName = (lastName) => {
    return {
        type: 'ADD_LAST_NAME',
        lastName: lastName
    };
};

export const addPhone = (phone) => {
    return {
        type: 'ADD_PHONE',
        phone: phone
    };
};

export const addSeat = (seat) => {  
    return {
        type: 'ADD_SEAT',
        seat: seat
    };
};

export const removeSeat = (seat) => {
    return {
        type: 'REMOVE_SEAT',
        seat: seat
    };
};

export const resetSeat = () => {
    return {
        type: 'RESET_SEATS',        
    };
};

export const loadBooked = (list) => {
    return {
        type: 'LOAD_BOOKED',
        list: list
    };
};

export const changeSelected = (status) => {
    return {
        type: 'CHANGE_SELECTED',
        status: status
    };
};

export const logIn = (status) => {
    return {
        type: 'LOG_IN',
        logIn: status
    };
};