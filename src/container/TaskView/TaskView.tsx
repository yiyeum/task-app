import React, { useState } from 'react'
import { HeaderSort, ListView, TaskForm } from '../../components'
import { ITask, ICategory } from '../../models'

export const TaskView = () => {
    const [list, setList] = useState<ITask[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
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
                setCategory={setCategory}
                category={category}
                setSortBy={setSortBy}
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