import React, { useContext } from 'react'
import { WithStyles, withStyles, Box } from '@material-ui/core'
import { ITask, ITaskSaverData } from '../../models'
import { NoListFound, TaskItem } from '../'
import { TaskSaverContext } from '../../App'

const styles = {
    root: {
        backgroundColor: '#FAFAFA',
        padding: 20,
        minHeight: '100vh',
        marginBottom: '95px',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90
    }
}

const ListViewBase = ({ classes }: WithStyles<typeof styles>) => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks, sortBy } = taskSaverData
    const { searchQuery, priorityFilter } = sortBy

    const filterTodos = (): ITask[] => {
        if (tasks.length > 0) {
            if (priorityFilter.length > 0) {
                const filteredByPriority: ITask[] = tasks.filter((task: ITask) => priorityFilter.includes(task.priority))
                return getFilteredByQuery(filteredByPriority)
            } else {
                return tasks
            }
        }
        return []
    }

    const getFilteredByQuery = (tasks: ITask[]): ITask[] => {
        return tasks.filter((task: ITask) => task.desc.includes(searchQuery))
    }

    return (
        <div className={classes.root} data-testid='list-view'>
            {
                filterTodos().length > 0 ?
                    filterTodos().map((item: ITask) => {
                        return (
                            <TaskItem item={item} />
                        )
                    })
                    :
                    <Box textAlign='center' mt={20}>
                        <NoListFound />
                    </Box>
            }
        </div>
    );
}

export const ListView = withStyles(styles)(ListViewBase)