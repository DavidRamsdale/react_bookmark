const defaultState = {
    token: sessionStorage.getItem("token") || null
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case "AUTH_TOKEN":
            return {...state, token: action.payload};
        // case "CLEAR_TOKEN":
        //     return{...state, token: null};
        default:
            return state;
    }
}