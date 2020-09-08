import React from 'react'
import { render } from '@testing-library/react'
import { List } from './'
import { Tasks, Task } from '../../fixtures/Task';
import { Categories } from '../../fixtures/Category';

const { getByTestId } = render(
    <List
        list={Tasks}
        item={Task}
        category={Categories}
        setList={jest.fn()}
        setCategory={jest.fn()}
        setSortBy={jest.fn()}
    />
);

test('Render List component', () => {
    expect(getByTestId('list')).toBeInTheDocument()
})

