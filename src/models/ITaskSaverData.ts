import { Dispatch, SetStateAction } from "react"
import { ICategory } from "./ICategory"
import { ISortByState } from "./ISortByState"
import { ITask } from "./ITask"

export interface ITaskSaverData {
    tasks: ITask[]
    setTask: Dispatch<SetStateAction<ITask[]>>
    categories: ICategory[]
    sortBy: ISortByState
    setCategory: Dispatch<SetStateAction<ICategory[]>>
    setSortBy: Dispatch<SetStateAction<ISortByState>>
}