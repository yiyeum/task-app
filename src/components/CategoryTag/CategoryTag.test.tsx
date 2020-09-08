import React from 'react'
import { render } from '@testing-library/react'
import { CategoryTag } from '.'
import { Category } from '../../fixtures/Category'

const { getByTestId } = render(
    <CategoryTag
        category={Category}
        done={true}
    />
);

test('Render CategoryTag component', () => {
    expect(getByTestId('category-tag')).toBeInTheDocument()
})

