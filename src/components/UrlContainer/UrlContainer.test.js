import React from 'react';
import { UrlContainer, mapStateToProps, mapDispatchToProps } from './UrlContainer.js'
import { setUrls } from '../../actions';
import { shallow } from 'enzyme';
import { urls } from '../../reducers/urls.js';

// actions
// reducers
// mapStateToProps
// mapDispatchToProps

describe('UrlContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UrlContainer
        urls={[]}
      />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('ACTIONS: should have a type SET_URLS in actions', () => {
    const mockUrl = 'http://mockurlinformation-fortesting.com'
    const expected = {
      type: 'SET_URLS',
      urls: mockUrl
    }
    const result = setUrls(mockUrl)
    expect(result).toEqual(expected)
  })

  it('REDUCER: should return the initial state if no action is provided', () => {
    const expected = []
    const result = urls(undefined, {})
    expect(result).toEqual(expected)
  })

  it('REDUCER: should return the correct state if action type is SET_URLS', () => {
    const mockUrl = {
      id: 2,
      long_url: 'http://mockurlinformation-fortesting.com',
      short_url: 'http://imshort.com',
      title: 'testing'
    }
    const mockState = []
    const mockAction = {
      type: 'SET_URLS',
      urls: mockUrl
    }
    const expected = [{
      id: 2,
      long_url: 'http://mockurlinformation-fortesting.com',
      short_url: 'http://imshort.com',
      title: 'testing'
    }]
    const result = urls(mockState, mockAction)
    expect(result).toEqual(expected)
  })

  it('REDUCER: should be able to add onto state with a new URL when action type is SET_URLS', () => {
    const mockUrl = {
      id: 2,
      long_url: 'http://mockurlinformation-fortesting.com',
      short_url: 'http://imshort.com',
      title: 'testing'
    }
    const mockState = [{
      id: 1,
      long_url: 'http://mockurlinformation-fortesting-butlonger.com',
      short_url: 'http://short.url',
      title: 'testing'
    }]
    const mockAction = {
      type: 'SET_URLS',
      urls: mockUrl
    }
    const expected = [{
      id: 1,
      long_url: 'http://mockurlinformation-fortesting-butlonger.com',
      short_url: 'http://short.url',
      title: 'testing'
    },{
      id: 2,
      long_url: 'http://mockurlinformation-fortesting.com',
      short_url: 'http://imshort.com',
      title: 'testing'
    }]
    const result = urls(mockState, mockAction)
    expect(result).toEqual(expected)
  })

  it('MSTP: should return a url array of urls from redux global store', () => {
    const mockState = { urls: [{
      id: 1,
      long_url: 'http://mockurlinformation-fortesting-butlonger.com',
      short_url: 'http://short.url',
      title: 'testing'
    }],
    doubleCheck: 'should not return me'}
    const expected = { urls: [{
      id: 1,
      long_url: 'http://mockurlinformation-fortesting-butlonger.com',
      short_url: 'http://short.url',
      title: 'testing'
    }]}
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('MDTP: should call dispatch when setUrls is called', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'http://mockurlinformation-fortesting-butlonger.com'
    const actionToDispatch = setUrls(mockUrl)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setUrls(mockUrl)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })



})
