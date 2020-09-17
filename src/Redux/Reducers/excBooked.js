let defaultBooked = [];


const orderBooked = (state = defaultBooked, action) => {
    switch (action.type) {
        case 'LOAD_BOOKED':
            return state = action.list;             
        default:
            return state;
    };
};

export default orderBooked;