import React from 'react'
import { render } from '@testing-library/react'
import { TaskForm } from './'
import { Tasks } from '../../fixtures/Task';
import { Categories } from '../../fixtures/Category';

const { getByTestId } = render(
    <TaskForm
        list={Tasks}
        category={Categories}
        setList={jest.fn()}
        setCategory={jest.fn()}
    />
);

test('Render TaskForm component', () => {
    expect(getByTestId('task-form')).toBeInTheDocument()
})

