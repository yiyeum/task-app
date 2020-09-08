import React from 'react'
import { render } from '@testing-library/react'
import { NoListFound } from '.'

const { getByTestId } = render(
    <NoListFound />
);

test('Render NoListFound component', () => {
    expect(getByTestId('no-list-found')).toBeInTheDocument()
})

