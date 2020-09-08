import React from 'react'
import { render } from '@testing-library/react'
import { DeleteModal } from '.'

const { getByTestId } = render(
    <DeleteModal
        open={false}
        setOpen={jest.fn()}
        handleDelete={jest.fn()}
    />
);

test('Render DeleteModal component', () => {
    expect(getByTestId('delete-modal')).toBeInTheDocument()
})

