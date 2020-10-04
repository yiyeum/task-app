import React, { useState, ChangeEvent, useContext, ReactElement } from 'react'
import * as uuid from 'uuid'
import { Grid, TextField, WithStyles, withStyles, Button, Select, MenuItem } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { ITask, ICategory, ITaskSaverData, IPriorityListItem } from '../../models'
import { getPastelColor } from '../../utils/helper'
import { PRIORITY_HIGH, PRIORITY_LIST } from '../../assets/constants'
import { TaskSaverContext } from '../../App'

const styles = {
    root: {
        position: 'fixed' as 'fixed',
        bottom: 0,
        padding: '2% 4%',
        boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
        backgroundColor: '#ffffff'
    },
    txtField: {
        width: '90%'
    },
    btn: {
        width: '42px',
        borderRadius: '20px',
        minWidth: 0
    },
    icon: {
        fontSize: 30,
        color: '#757575'
    }
}

interface IFormState {
    task: string
    category: string
    priority: string
    error: boolean
}

const formState: IFormState = {
    task: '',
    category: '',
    priority: PRIORITY_HIGH,
    error: false
}

const TaskFormBase = ({ classes }: WithStyles<typeof styles>): ReactElement => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks, setTask, categories, setCategory } = taskSaverData
    const [form, setForm] = useState(formState)

    const formattedCategory: string = form.category.trim().charAt(0).toUpperCase() + form.category.trim().slice(1)
    const identicalCategory: ICategory[] = categories.filter((category: ICategory) => category.name === formattedCategory)
    const tagColor: string = getPastelColor()

    let isTaskValid: boolean = form.task.trim().length !== 0
    let isCategoryValid: boolean = form.category.trim().length !== 0

    const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const updateCategory = (categoryId: string): void => {
        if (identicalCategory.length === 0) {
            const categoryWithHsl: ICategory = {
                id: categoryId,
                name: formattedCategory,
                hsl: tagColor
            }
            setCategory([...categories, categoryWithHsl])
        }
    }

    const getUpdatedTask = (categoryId: string): ITask => {
        return {
            id: new Date().toString(),
            desc: form.task,
            categoryId: categoryId,
            done: false,
            priority: form.priority,
            createdDate: new Date()
        }
    }

    const submitForm = (): void => {
        const categoryId: string = uuid.v4()
        if (isTaskValid && isCategoryValid) {
            // update list and category state
            setTask([...tasks, getUpdatedTask(categoryId)])
            updateCategory(categoryId)

            // clear form state
            setForm(formState)
        } else {
            setForm({ ...form, error: true })
        }
    }

    const selectHandleForm = (e: ChangeEvent<{ value: unknown }>) => {
        setForm({ ...form, priority: e.target.value as string })
    };

    return (
        <Grid container className={classes.root} data-testid='task-form'>
            <Grid item lg={5} md={5} sm={5} xs={5}>
                <TextField
                    className={classes.txtField}
                    placeholder='Task (max 50)'
                    value={form.task}
                    onChange={handleForm}
                    multiline
                    name='task'
                    required={true}
                    error={form.error && !isTaskValid}
                    helperText={(form.error && !isTaskValid) && 'Pleae fill this field'}
                    inputProps={{ maxLength: 50 }}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <TextField
                    className={classes.txtField}
                    placeholder='Category (max 20)'
                    value={form.category}
                    onChange={handleForm}
                    name='category'
                    required={true}
                    error={form.error && !isCategoryValid}
                    helperText={(form.error && !isCategoryValid) && 'Pleae fill this field'}
                    inputProps={{ maxLength: 20 }}
                />
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2}>
                <Select value={form.priority} style={{ width: '100%' }} name='priority' onChange={selectHandleForm}>
                    {
                        PRIORITY_LIST.map((list: IPriorityListItem) => {
                            return (
                                <MenuItem key={list.id} value={list.name}>{list.name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} style={{ textAlign: 'right' }}>
                <Button
                    aria-label="Add Task"
                    variant='outlined'
                    className={classes.btn}
                    onClick={submitForm}
                >
                    <AddIcon className={classes.icon} />
                </Button>
            </Grid>
        </Grid>
    );
}

export const TaskForm = withStyles(styles)(TaskFormBase)