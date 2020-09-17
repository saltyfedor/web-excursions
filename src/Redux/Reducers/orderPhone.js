let defaultPhone = ''


const orderPhone = (state = defaultPhone, action) => {
    switch (action.type) {
        case 'ADD_PHONE':
            
            return state = action.phone;
        
        default:
            return state;
    };
};

export default orderPhone;
