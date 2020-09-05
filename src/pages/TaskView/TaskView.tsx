import React from 'react'
import { HeaderSort, ListView, TaskForm } from '../../containers'

export const TaskView = () => {
    return (
        <>
            <HeaderSort />
            <ListView />
            <TaskForm />
        </>
    );
}