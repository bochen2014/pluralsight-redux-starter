import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

const setup = ()=>{
    let props = {
        course:{},   
        saving: false, 
        erros: {},      
        onSave:()=>{},
        onChange : ()=>{}
    }
    let renderer = TestUtils.createRenderer()
    renderer.render(<CourseForm  {...props} />)
    let output = render.getRenderOutput()

    return{
        props,
        output,
        renderer
    }
}
describe('CourseForm via React Test Utils', ()=>{
    it('render form and h1', ()=>{
        debugger
        const {output} = setup()
        expect(output.type).toBe('form')
    })


})