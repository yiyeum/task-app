import React from 'react'
import { render } from '@testing-library/react'
import { HeaderSort } from '.'
import { Categories } from '../../fixtures/Category'
import { Tasks } from '../../fixtures/Task'

const { getByTestId } = render(
    <HeaderSort
        category={Categories}
        sortBy='all'
        setSortBy={jest.fn()}
        list={Tasks}
    />
);

test('Render HeaderSort component', () => {
    expect(getByTestId('header-sort')).toBeInTheDocument()
})

