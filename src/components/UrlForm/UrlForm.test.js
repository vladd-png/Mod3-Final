import React from 'react';
import { UrlForm } from './UrlForm.js'
import { shallow } from 'enzyme';

describe('UrlForm', () => {
  let wrapper, mockAddUrls;

  beforeEach(() => {
    mockAddUrls = jest.fn().mockImplementation()
    wrapper = shallow(<UrlForm
      addUrls={mockAddUrls}
      />)
  })

  it('should update state when handleNameChange is called', () => {
    let mockEvent = {
      target: {
        name: 'title',
        value: 'Bugs Bunny'
      }
    }
    let expected = 'Bugs Bunny'
    wrapper.instance().handleNameChange(mockEvent)
    expect(wrapper.state('title')).toEqual(expected)
  })

  it('should call addUrls when handleSubmit is called', () => {
    let mockEvent = {
      target: {
        name: 'title',
        value: 'Bugs Bunny'
      },
      preventDefault: jest.fn()
    }
    wrapper.instance().handleSubmit(mockEvent)
    expect(mockAddUrls).toHaveBeenCalled()
  })

  it('should reset state when clearInputs is called', () => {
    let mockState ={
      title: 'Jessica Rabbit',
      long_url: 'http://longesturlever.com',
      short_url: 'shorter.com'
    }
    wrapper.setState(mockState)
    wrapper.instance().clearInputs()
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('long_url')).toEqual('')
  })
})
