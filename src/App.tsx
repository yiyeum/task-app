import React, { createContext, useState, ReactElement } from 'react'
import { HeaderFilter, ListView, TaskForm } from './components'
import { ITask, ICategory, ITaskSaverData, ISortByState } from './models'
import { taskSaverData } from './utils/store'

export const TaskSaverContext: React.Context<ITaskSaverData> = createContext<ITaskSaverData>(taskSaverData)

const App = (): ReactElement => {
  const [tasks, setTask] = useState<ITask[]>([])
  const [categories, setCategory] = useState<ICategory[]>([])
  const [sortBy, setSortBy] = useState<ISortByState>({ searchQuery: '', priorityFilter: [] })

  return (
    <TaskSaverContext.Provider value={{
      tasks,
      setTask,
      categories,
      setCategory,
      sortBy,
      setSortBy
    }}>
      <HeaderFilter />
      <ListView />
      <TaskForm />
    </TaskSaverContext.Provider>
  );
}

export default App
