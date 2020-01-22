import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test("Testing Login Page rendering", ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})

test("Testing Login", ()=> {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<LoginPage startGoogleLogin={onClickSpy}/>)
    const loginButton = wrapper.find('button');
    expect(loginButton.length).toBe(1);
    loginButton.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
})