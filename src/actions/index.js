import LocalApi from "./../apis/local";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    
    return {
        type: "AUTH_TOKEN",
        payload: token
    };
}

export const fetchBookMarks = () => {
    return async ( dispatch, getState ) => {
        let response = await LocalApi.get("/bookmarks");

        dispatch({
            type: "BOOKMARK_LIST",
            payload: response.data
        })
    }
}

export const createBookMark = ({ title, url }) => {
    return async (dispatch, getState) => {
        let response = await LocalApi.post("/bookmarks", {title, url});

        dispatch({
            type: "BOOKMARK_LIST",
            payload: response.data
        });
    }
}