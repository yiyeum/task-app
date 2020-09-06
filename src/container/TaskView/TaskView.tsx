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
                list={list}
            />
            <ListView
                list={list}
                sortBy={sortBy}
                setList={setList}
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