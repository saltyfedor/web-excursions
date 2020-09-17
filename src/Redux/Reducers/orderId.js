let defaultId = ''


const orderID = (state = defaultId, action) => {
    switch (action.type) {
        case 'ADD_ID':
            console.log(action.id);
            return state = action.id;             
        default:
            return state;
    };
};

export default orderID;