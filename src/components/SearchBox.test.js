import {shallow} from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();
})
