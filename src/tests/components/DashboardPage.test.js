import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test("Testing Not Found rendering", ()=>{
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
})