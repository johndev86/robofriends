import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js';

import * as reducers from './reducers';

describe('searchrobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
    })

    it('should handle change searchfield', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'});
    })
})

describe('requestrobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle pending state', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: ''
        });
    })

    it('should handle success state', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'test',
                email: 'test@email.com'
            }]
        })).toEqual({
            isPending: false,
            robots: [{
                id: 1,
                name: 'test',
                email: 'test@email.com'
            }],
            error: ''
        });
    })

    it('should handle failed state', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'failed'
        })).toEqual({
            isPending: false,
            robots: [],
            error: 'failed'
        });
    })
})