import React from 'react'
import { render } from '@testing-library/react'
import { TaskView } from '.'

const { getByTestId } = render(
    <TaskView />
);

test('Render TaskView component', () => {
    expect(getByTestId('task-view')).toBeInTheDocument()
})

