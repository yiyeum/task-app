import { ITask } from '../models'

export const List: ITask = {
    id: new Date().toString(),
    task: 'Clean room',
    category: {
        name: 'Home',
        hsl: 'hsl(55, 100%, 81%)'
    },
    done: false,
    createdDate: new Date()
}