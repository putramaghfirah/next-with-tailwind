import React from 'react'
import { render, fireEvent } from '../testUtils'
import { HomePage } from '@pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<HomePage />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
