import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { mount } from 'enzyme'

it('renders without crashing', () => {
  let wrapper = mount(<App />)
});

xit('allows players to add themselves to the game', () => {
  let wrapper = mount(<App />)
  wrapper
    .find('input[type="text"]')
    .simulate('change', {target: { value: 'Kyle' }})
  wrapper
    .find('input[type="submit"]')
    .simulate('submit')
  expect(wrapper.find('ul[id="players"]')).text().toContain('Kyle')
});
