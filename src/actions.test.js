import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING,
     REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

import * as actions from './actions'
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureStore([thunkMiddleware]);

describe('test redux actions', () => {

    it('should create action to search robots', () => {
        const text = 'test';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })

    it('should create action to request robots - success', () => {
        const pending = {
            type: REQUEST_ROBOTS_PENDING
        }

        const successPayload = [
            {
                id: 1,
                name: 'test1',
                email: 'test1@email.com'
            },
            {
                id: 2,
                name: 'test2',
                email: 'test2@email.com'
            },
            {
                id: 3,
                name: 'test3',
                email: 'test3@email.com'
            }
        ];

        const success = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: successPayload
        }

        const mockApiCall = jest.fn(() => Promise.resolve(successPayload));
        
        const store = mockStore();

        return store.dispatch(actions.requestRobots(mockApiCall))
        .then(() => {
            //console.log(store.getActions());
            expect(mockApiCall).toHaveBeenCalledTimes(1);
            const pendingAction = store.getActions()[0];
            const successAction = store.getActions()[1];
            expect(pendingAction).toEqual(pending);
            expect(successAction).toEqual(success);
        });

    })

    it('should create action to request robots - fail', () => {
        const pending = {
            type: REQUEST_ROBOTS_PENDING
        }

        const fail = {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'failed'
        }
        
        const store = mockStore();

        const mockFailed = () => Promise.reject('failed');

        return store.dispatch(actions.requestRobots(mockFailed))
        .then(() => {
            //console.log(store.getActions());
            const pendingAction = store.getActions()[0];
            const failAction = store.getActions()[1];
            expect(pendingAction).toEqual(pending);
            expect(failAction).toEqual(fail);
        });
    })

    it('should create action to request robots - empty results', () => {
        const pending = {
            type: REQUEST_ROBOTS_PENDING
        }

        const fail = {
            type: REQUEST_ROBOTS_FAILED,
            payload: new Error()
        }
        
        const store = mockStore();

        const mockEmptyResults = () => Promise.resolve({});

        return store.dispatch(actions.requestRobots(mockEmptyResults))
        .then(() => {
            //console.log(store.getActions());
            const pendingAction = store.getActions()[0];
            const failAction = store.getActions()[1];
            expect(pendingAction).toEqual(pending);
            expect(failAction).toEqual(fail);
        });
    })
});