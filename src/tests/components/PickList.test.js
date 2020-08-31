import React from 'react';
import { shallow } from 'enzyme';
import {PickList} from '../../components/PickList';

import songs from '../fixtures/songs';

test('Rendering No Songs', ()=>{
    const wrapper = shallow(<PickList songs={[]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Rendering Songs', ()=>{
    const wrapper = shallow(<PickList songs={songs}/>);
    expect(wrapper).toMatchSnapshot();
})