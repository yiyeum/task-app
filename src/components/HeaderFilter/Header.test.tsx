import React from 'react'
import { render } from '@testing-library/react'
import { HeaderFilter } from '.'

const { getByTestId } = render(
    <HeaderFilter />
);

test('Render HeaderFilter component', () => {
    expect(getByTestId('header')).toBeInTheDocument()
})

