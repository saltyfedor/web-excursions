
const logIn = (state = false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return state = action.logIn;             
        default:
            return state;
    };
};

export default logIn;