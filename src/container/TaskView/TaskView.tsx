import React, { useState } from 'react'
import { HeaderSort, ListView, TaskForm } from '../../components'
import { IList } from '../../models'

export const TaskView = () => {
    const [list, setList] = useState<IList[]>([])
    const [category, setCategory] = useState<String[]>([])

    return (
        <>
            <HeaderSort />
            <ListView />
            <TaskForm
                list={list}
                setList={setList}
                category={category}
                setCategory={setCategory}
            />
        </>
    );
}