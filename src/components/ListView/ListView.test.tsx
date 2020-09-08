import React from 'react'
import { render } from '@testing-library/react'
import { ListView } from './'
import { Tasks } from '../../fixtures/Task';
import { Categories } from '../../fixtures/Category';

const { getByTestId } = render(
    <ListView
        list={Tasks}
        sortBy='all'
        category={Categories}
        setList={jest.fn()}
        setCategory={jest.fn()}
        setSortBy={jest.fn()}
    />
);

test('Render ListView component', () => {
    expect(getByTestId('list-view')).toBeInTheDocument()
})

