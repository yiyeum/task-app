import React from 'react'
import { render } from '@testing-library/react'
import { TaskForm } from './'

const { getByTestId } = render(
    <TaskForm />
);

test('Render TaskForm component', () => {
    expect(getByTestId('task-form')).toBeInTheDocument()
})

