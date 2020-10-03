import React from 'react'
import { render } from '@testing-library/react'
import { ListView } from './'

const { getByTestId } = render(
    <ListView />
);

test('Render ListView component', () => {
    expect(getByTestId('list-view')).toBeInTheDocument()
})

