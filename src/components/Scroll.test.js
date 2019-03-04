import {shallow} from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Scroll component', () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper).toMatchSnapshot();
})
