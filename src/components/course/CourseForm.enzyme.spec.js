import React from 'react'
import expect from 'expect'
import {mount , shallow} from 'enzyme'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

const setup = (saving)=>{
    let props = {
        course:{},
        saving: saving, 
        errors: {},
        onSave:()=>{},
        onChange : ()=>{}
    }
    return shallow(<CourseForm {...props} />)
}


it('render form and h1', ()=>{
    const wrapper = setup(false)
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Manage Course')
})