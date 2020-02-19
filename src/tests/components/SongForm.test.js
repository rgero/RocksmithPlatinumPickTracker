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

test("Input - Difficulty change", ()=>{
    const value = "Hard"
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(3) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('difficulty')).toBe(value);
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

test("Input - Accuracy Change - Valid Input", ()=>{
    const value = "91.23";
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(4) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('accuracy')).toBe(value);
})

test("Input - Accuracy Change - Invalid Input (Not Number)", ()=>{
    const value = "Alpha";
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(4) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('accuracy')).toBe(""); // Empty String is the current default value
})

test("Input - Accuracy Change - Invalid Input (Too long)", ()=>{
    const value = "10213.12";
    const wrapper = shallow(<SongForm />);
    const descriptionElem = wrapper.find('input').at(4) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('accuracy')).toBe(""); // Empty String is the current default value
})

test("Input - Pick Level Change", ()=>{
    const value = "Bronze";
    const wrapper = shallow(<SongForm />);
    expect(wrapper.state('level')).toBe("Platinum");
    const descriptionElem = wrapper.find('select').at(0) 
    descriptionElem.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('level')).toBe(value); // Empty String is the current default value
})