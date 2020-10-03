import React, { ChangeEvent, useContext, useState } from 'react'
import { Grid, Checkbox, Typography, WithStyles, withStyles, Button, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { ITask, ICategory, ITaskSaverData } from '../../models'
import { DeleteModal, CategoryTag } from '..'
import { formatDate } from '../../utils/format'
import { TaskSaverContext } from '../../App'

const styles = {
    root: {
        borderBottom: '1px solid #E5E5E5',
        padding: 20
    },
    checkboxGrid: {
        textAlign: 'center' as 'center'
    },
    icon: {
        color: '#757575'
    },
    tag: {
        backgroundColor: '#FFDEDE',
        padding: '3px 10px',
        borderRadius: 10
    },
    done: {
        textDecoration: 'line-through'
    }
}

interface IProps extends WithStyles<typeof styles> {
    item: ITask
}

const TaskItemBase = ({ classes, item }: IProps) => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks, setTask, categories, setCategory, setSortBy, sortBy } = taskSaverData
    const { desc, categoryId, createdDate, done, id } = item
    const currentCategory: ICategory = categories.filter((category: ICategory) => category.id === categoryId)[0]
    const [modalState, setModalState] = useState<boolean>(false)

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
        const index: number = tasks.findIndex((task: ITask) => task.id === id)
        const updatedTask: ITask = {
            ...item,
            done: e.target.checked
        }
        setTask([
            ...tasks.slice(0, index),
            updatedTask,
            ...tasks.slice(index + 1)
        ])
    }

    const handleDelete = (): void => {
        if (tasks.filter((task: ITask) => task.categoryId === item.categoryId).length === 1) {
            setCategory(categories.filter((category: ICategory) => category.id !== categoryId))
            setSortBy({ ...sortBy, searchQuery: '' })
        }
        setTask(tasks.filter((task: ITask) => task.id !== id))
    }

    return (
        <div data-testid='task-item'>
            <Grid container className={classes.root}>
                <Grid item lg={1} md={1} sm={1} className={classes.checkboxGrid}>
                    <Checkbox
                        onChange={handleCheckbox}
                        checked={item.done}
                        data-testid='task-checkbox'
                    />
                </Grid>
                <Grid item lg={7} md={9} sm={9}>
                    <Box display='inline-block'>
                        <Typography variant='body1' color='textPrimary' className={done ? classes.done : ''}>
                            {desc}
                        </Typography>
                    </Box>
                    <Box display='inline-block' ml={5}>
                        <CategoryTag done={done} category={currentCategory} />
                    </Box>
                    <Box display='block'>
                        <Typography variant='caption' color='textSecondary'>
                            {formatDate(createdDate)}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={1} md={1} sm={1}>
                    <Button onClick={() => setModalState(true)}>
                        <DeleteIcon className={classes.icon} />
                    </Button>
                </Grid>
            </Grid>
            <DeleteModal open={modalState} setOpen={setModalState} handleDelete={handleDelete} />
        </div>
    );
}

export const TaskItem = withStyles(styles)(TaskItemBase)