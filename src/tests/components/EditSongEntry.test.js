import React from 'react';
import {shallow} from 'enzyme';
import {EditSongPage} from '../../components/EditSongEntry';
import songs from '../fixtures/songs';

let onSubmit, removeItem, history, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    removeItem = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditSongPage 
            onSubmit={onSubmit} 
            history={history} 
            removeItem={removeItem} 
            song={songs[0]}
        />
    )
})

test("Snapshot rendering test", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("Testing onSubmit", ()=>{
    const testObj = wrapper.find('SongForm');
    expect(testObj.length).toBe(1);
    testObj.prop('onSubmit')(songs[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(songs[0].id, songs[0]);
})

test("testing removeItem", ()=>{
    const testObj = wrapper.find('button');
    expect(testObj.length).toBe(1);
    testObj.simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeItem).toHaveBeenLastCalledWith(songs[0].id);
})