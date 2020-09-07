import { ICategory } from "./ICategory"

export interface IList {
    id: string
    task: string
    category: ICategory
    done: boolean
    createdDate: Date
}