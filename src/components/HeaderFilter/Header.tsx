import React, { useContext, ReactElement } from 'react'
import { Typography } from '@material-ui/core'
import { ITask, ITaskSaverData } from '../../models'
import { TaskSaverContext } from '../../App'

export const Header = (): ReactElement => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks } = taskSaverData

    const getTaskProgress = (): string => {
        const doneLength: number = tasks.filter((item: ITask) => item.done).length
        return `${doneLength} of ${tasks.length} tasks`
    }

    return (
        <div data-testid='header'>
            <Typography variant='h4' color='textPrimary'>Task Saver</Typography>
            <Typography variant='body1' color='textSecondary'>{getTaskProgress()}</Typography>
        </div>
    );
}
