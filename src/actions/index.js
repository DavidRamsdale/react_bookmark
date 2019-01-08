export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    
    return {
        type: "AUTH_TOKEN",
        payload: token
    };
}

// export const clearToken = () => {
//     sessionStorage.clear();
    
//     return {
//         type: "CLEAR_TOKEN"
//     };
// }