import React, { useContext, ReactElement } from 'react'
import { WithStyles, withStyles, Box } from '@material-ui/core'
import { ITask, ITaskSaverData } from '../../models'
import { NoListFound, TaskItem } from '../'
import { TaskSaverContext } from '../../App'

const styles = {
    root: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        minHeight: '100vh',
        marginBottom: '95px',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90
    }
}

const ListViewBase = ({ classes }: WithStyles<typeof styles>): ReactElement => {
    const { tasks, sortBy }: ITaskSaverData = useContext(TaskSaverContext)
    const { searchQuery, priorityFilter } = sortBy

    const getFilteredByQuery = (tasks: ITask[]): ITask[] => {
        return tasks.filter((task: ITask) => task.desc.includes(searchQuery))
    }

    const filterTodos = (): ITask[] => {
        if (tasks.length > 0) {
            if (priorityFilter.length > 0) {
                const filteredByPriority: ITask[] = tasks.filter((task: ITask) => priorityFilter.includes(task.priority))
                return getFilteredByQuery(filteredByPriority)
            }

            return getFilteredByQuery(tasks)
        }
        return []
    }

    return (
        <div className={classes.root} data-testid='list-view'>
            {
                filterTodos().length > 0 ?
                    filterTodos().map((item: ITask) => {
                        return (
                            <TaskItem item={item} key={item.id} />
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