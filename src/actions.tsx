import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

import {Dispatch} from 'redux';

export const setSearchField = (text: string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = (apiCall: () => Promise<string>) => (dispatch: Dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall()
    .then((data: string)=>{
        if (Object.keys(data).length === 0 || data.length === 0)
            throw new Error();
        return data;
    })
    .then((data: string)=>dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch((error: any)=>dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}