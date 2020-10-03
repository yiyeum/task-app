import { ITask } from '../models'

export const Task: ITask = {
    id: new Date().toString(),
    desc: 'Clean room',
    categoryId: '10688d4c-04f3-11eb-adc1-0242ac120002',
    priority: 'high',
    done: false,
    createdDate: new Date()
}

export const Tasks: ITask[] = [
    {
        id: new Date().toString(),
        desc: 'Clean room',
        categoryId: '10688d4c-04f3-11eb-adc1-0242ac120002',
        priority: 'medium',
        done: false,
        createdDate: new Date()
    },
    {
        id: 'Mon Sep 07 2020 21:55:04 GMT-0400 (Eastern Daylight Time)',
        desc: 'Send report',
        categoryId: '20688d4c-04f3-11eb-adc1-0242ac120003',
        priority: 'low',
        done: false,
        createdDate: new Date()
    }
]