let defaultSeats = []


const orderSeats = (state = defaultSeats, action) => {
    switch (action.type) {
        case 'ADD_SEAT':            
            state = state.concat(action.seat)
            return state;
        case 'REMOVE_SEAT':
            state = state.filter(item => item !== action.seat);
            return state;
        case 'RESET_SEATS':
            state = [];
            return state;
        default:
            return state;
    };
};

export default orderSeats;
