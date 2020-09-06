import React, { useState } from 'react'
import { HeaderSort, ListView, TaskForm } from '../../components'
import { IList } from '../../models'

export const TaskView = () => {
    const [list, setList] = useState<IList[]>([])
    const [category, setCategory] = useState<string[]>([])
    const [sortBy, setSortBy] = useState('all')

    return (
        <>
            <HeaderSort
                category={category}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <ListView
                list={list}
                sortBy={sortBy}
            />
            <TaskForm
                list={list}
                setList={setList}
                category={category}
                setCategory={setCategory}
            />
        </>
    );
}