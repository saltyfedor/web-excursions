let defaultId = ''


const excursionId = (state = defaultId, action) => {
    switch (action.type) {
        case 'ADD_EXCURSIONID':
            return state = action.id;
        
        default:
            return state;
    };
};

export default excursionId;