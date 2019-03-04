import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        searchField: '', 
        onSearchChange: jest.fn(), 
        robots: [],
        isPending: false
    }
    
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders main without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        searchField: 'a', 
        onSearchChange: jest.fn(), 
        robots: [
            {
                id: 1,
                name: 'john',
                email: 'john@email.com'
            }
        ],
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
});
