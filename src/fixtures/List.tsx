import { IList } from '../models'

export const List: IList = {
    id: new Date().toString(),
    task: 'Clean room',
    category: {
        name: 'Home',
        hsl: 'hsl(55, 100%, 81%)'
    },
    done: false,
    createdDate: new Date()
}