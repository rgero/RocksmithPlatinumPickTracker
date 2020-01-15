import React from 'react';
import {shallow} from 'enzyme';
import {CreateSongEntry} from '../../components/CreateSongEntry';

import songs from '../fixtures/songs';

let onSubmit, history, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<CreateSongEntry onSubmit={onSubmit} history={history}/>)
})

test("Snapshot test of the rendering", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('OnSubmit testing', ()=> {
    const testObj = wrapper.find('SongForm');
    expect(testObj.length).toBe(1);
    testObj.prop('onSubmit')(songs[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(songs[0]);
})