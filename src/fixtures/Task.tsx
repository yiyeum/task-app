import { ITask } from '../models'

export const Task: ITask = {
    id: new Date().toString(),
    task: 'Clean room',
    category: {
        name: 'Home',
        hsl: 'hsl(55, 100%, 81%)'
    },
    done: false,
    createdDate: new Date()
}

export const Tasks: ITask[] = [
    {
        id: new Date().toString(),
        task: 'Clean room',
        category: {
            name: 'Home',
            hsl: 'hsl(55, 100%, 81%)'
        },
        done: false,
        createdDate: new Date()
    },
    {
        id: 'Mon Sep 07 2020 21:55:04 GMT-0400 (Eastern Daylight Time)',
        task: 'Send report',
        category: {
            name: 'Work',
            hsl: 'hsl(55, 100%, 83%)'
        },
        done: false,
        createdDate: new Date()
    }
]