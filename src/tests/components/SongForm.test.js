import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import SongForm from '../../components/SongForm';

test("Rendering the Song Form Form", ()=>{
    const wrapper =shallow(<SongForm/>);
    expect(wrapper).toMatchSnapshot();
})

// Testing the Inputs
test("Input - Artist change", ()=>{
    const value = "Rise Against"
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(0) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('artist')).toBe(value);
})

test("Input - Song change", ()=>{
    const value = "Far from Perfect"
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(1) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('songName')).toBe(value);
})

test("Testing Date change", ()=> {
    const now = moment();
    const wrapper = shallow(<SongForm />);
    const testObj = wrapper.find('withStyles(SingleDatePicker)');
    expect(testObj.length).toBe(1);
    testObj.prop("onDateChange")(now);
    expect(wrapper.state('date')).toEqual(now);
})


test("Input - Path change", ()=>{
    const value = "Alternate Lead"
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(2) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('path')).toBe(value);
})

test("Input - Note change", ()=>{
    const value = "This song was really fun, I should play it more";
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('textarea').at(0) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('notes')).toBe(value);
})

/* TODO

    -Once the accuracy code is written I need the following tests
        - Accuracy
        - Valid Form Submission
    - Once the error checking is in place
        - Invalid Form Submission
    - Once the Data Storage is in place
        - Recalling Data.
*/