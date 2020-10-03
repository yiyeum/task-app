import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

const { getByTestId } = render(
    <App />
);

test('Render TaskView component', () => {
    expect(getByTestId('task-view')).toBeInTheDocument()
})