import { ISortByState, ITaskSaverData } from "../models"

export const taskSaverData: ITaskSaverData = {
    tasks: [],
    setTask: () => { },
    categories: [],
    sortBy: {} as ISortByState,
    setCategory: () => { },
    setSortBy: () => { }
}