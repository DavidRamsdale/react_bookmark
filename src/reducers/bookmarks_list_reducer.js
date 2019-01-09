const defaultState = [];

export default ( state = defaultState, action) => {
    switch(action.type) {
        case "BOOKMARK_LIST":
        return action.payload;

        default:
            return state;
    }
}