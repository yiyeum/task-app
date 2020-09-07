import React, { Dispatch, SetStateAction, useState, ChangeEvent } from 'react'
import { Grid, TextField, WithStyles, withStyles, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { IList, ICategory } from '../../models'
import { getPastelColor } from '../../utils/helper'

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

interface IProps extends WithStyles<typeof styles> {
    list: IList[]
    setList: Dispatch<SetStateAction<any>>
    category: ICategory[]
    setCategory: Dispatch<SetStateAction<ICategory[]>>
}

interface IFormState {
    task: string
    category: string
    error: boolean
}

const formState: IFormState = {
    task: '',
    category: '',
    error: false
}

const TaskFormBase = (props: IProps) => {
    const [form, setForm] = useState(formState)
    const { classes, list, setList, category, setCategory } = props

    const formattedCategory: string = form.category.trim().charAt(0).toUpperCase() + form.category.trim().slice(1)
    const identicalCategory: ICategory[] = category.filter((ct: ICategory) => ct.name === formattedCategory)
    const tagColor: string = getPastelColor()

    let isTaskValid: boolean = form.task.trim().length !== 0
    let isCategoryValid: boolean = form.category.trim().length !== 0

    const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const updateCategory = (): void => {
        if (identicalCategory.length === 0) {
            const categoryWithHsl: ICategory = {
                name: formattedCategory,
                hsl: tagColor
            }
            setCategory([...category, categoryWithHsl])
        }
    }

    const getUpdatedTask = (): IList => {
        return {
            id: new Date().toString(),
            task: form.task,
            category: {
                name: formattedCategory,
                hsl: identicalCategory.length > 0 ? identicalCategory[0].hsl : tagColor
            },
            done: false,
            createdDate: new Date()
        }
    }

    const submitForm = (): void => {
        if (isTaskValid && isCategoryValid) {
            // update list and category state
            setList([...list, getUpdatedTask()])
            updateCategory()

            // clear form state
            setForm(formState)
        } else {
            setForm({ ...form, error: true })
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} md={2} sm={2} xs={1}>
                <Button
                    aria-label="Add Task"
                    variant='outlined'
                    className={classes.btn}
                    onClick={submitForm}
                >
                    <AddIcon className={classes.icon} />
                </Button>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={8}>
                <TextField
                    className={classes.txtField}
                    placeholder='Task (max 50)'
                    value={form.task}
                    onChange={handleForm}
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
        </Grid>
    );
}

export const TaskForm = withStyles(styles)(TaskFormBase)