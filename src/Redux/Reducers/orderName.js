let defaultName = ''


const orderName = (state = defaultName, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            
            return state = action.name;
        
        default:
            return state;
    };
};

export default orderName;