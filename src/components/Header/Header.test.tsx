import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'

const { getByTestId } = render(
    <Header />
);

test('Render Header component', () => {
    expect(getByTestId('header')).toBeInTheDocument()
})

