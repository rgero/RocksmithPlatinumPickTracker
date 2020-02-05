import React from 'react';
import { shallow } from 'enzyme';
import {DashboardPage} from '../../components/DashboardPage';

import songs from '../fixtures/songs';

test("Rendering No Songs", ()=>{
    const wrapper = shallow(<DashboardPage songs={[]}/>);
    expect(wrapper).toMatchSnapshot();
})

test("Rendering Songs", ()=>{
    const wrapper = shallow(<DashboardPage songs={songs}/>);
    expect(wrapper).toMatchSnapshot();
})