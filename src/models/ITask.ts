import { ICategory } from "./ICategory"

export interface ITask {
    id: string
    task: string
    category: ICategory
    done: boolean
    createdDate: Date
}