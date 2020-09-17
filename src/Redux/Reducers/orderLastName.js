let defaultLastName = ''

const orderLastName = (state = defaultLastName, action) => {
    switch (action.type) {
        case 'ADD_LAST_NAME':
            return state = action.lastName;             
        default:
            return state;
    };
};

export default orderLastName;