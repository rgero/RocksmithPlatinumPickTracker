import React from 'react';
import { shallow } from 'enzyme';
import {SongList} from '../../components/SongList';

import songs from '../fixtures/songs';

test("Rendering No Songs", ()=>{
    const wrapper = shallow(<SongList songs={[]}/>);
    expect(wrapper).toMatchSnapshot();
})

test("Rendering Songs", ()=>{
    const wrapper = shallow(<SongList songs={songs}/>);
    expect(wrapper).toMatchSnapshot();
})