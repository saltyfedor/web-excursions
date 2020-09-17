let defaultEmail = ''


const orderEmail = (state = defaultEmail, action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return state = action.email;             
        default:
            return state;
    };
};

export default orderEmail;