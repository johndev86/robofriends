import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'test1',
            username: 'test',
            email: 'test1@email.com'
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(wrapper).toMatchSnapshot();
})
