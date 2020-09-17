let defaultSelected = false;


const dateSelected = (state = defaultSelected, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED':
            return state = action.status;             
        default:
            return state;
    };
};

export default dateSelected;