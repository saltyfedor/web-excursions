let defaultFirstName = ''

const orderFirstName = (state = defaultFirstName, action) => {
    switch (action.type) {
        case 'ADD_FIRST_NAME':
            return state = action.firstName;             
        default:
            return state;
    };
};

export default orderFirstName;