import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = (apiCall) => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall()
    .then(data=>{
        if (Object.keys(data).length === 0 || data.length === 0)
            throw new Error();
        return data;
    })
    .then(data=>dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error=>dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}