import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import DataDisplay from '../DataDisplay.vue'
import createFetchMock from 'vitest-fetch-mock'
const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

function createFetchResponse(data: object) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('DataDisplay', () => {
  it('makes a GET request to the correct URL', () => {
    const responseObject = [
      {
        title: 'test'
      }
    ]

    fetch.mockResponseOnce(JSON.stringify(responseObject))

    const wrapper = mount(DataDisplay, {})
    expect(wrapper.text()).toContain('Data')

    expect(fetch.requests().length).toEqual(1)
  })
})
