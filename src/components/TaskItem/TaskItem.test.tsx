import React from 'react'
import { render } from '@testing-library/react'
import { TaskItem } from '.'
import { Task } from '../../fixtures/Task'

const { getByTestId } = render(
    <TaskItem item={Task} />
);

test('Render TaskItem component', () => {
    expect(getByTestId('task-item')).toBeInTheDocument()
})

