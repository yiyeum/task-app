import React, { Dispatch, SetStateAction, useState, ChangeEvent } from 'react'
import { Grid, TextField, WithStyles, withStyles, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { IList } from '../../models'
import moment from 'moment'

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
    category: string[]
    setCategory: Dispatch<SetStateAction<string[]>>
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
    const formattedCategory = form.category.trim().charAt(0).toUpperCase() + form.category.trim().slice(1)
    let isTaskValid = form.task.trim().length !== 0
    let isCategoryValid = form.category.trim().length !== 0

    const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const updateCategory = (): void => {
        if (category.filter((ct: string) => ct === formattedCategory).length === 0) {
            setCategory([...category, formattedCategory])
        }
    }

    const submitForm = () => {
        if (isTaskValid && isCategoryValid) {
            // update list and category state
            const updatedTask = {
                id: moment(),
                task: form.task,
                category: formattedCategory,
                done: false,
                createdDate: moment()
            }
            setList([...list, updatedTask])
            updateCategory()

            // clear form state
            setForm(formState)
        } else {
            setForm({ ...form, error: true })
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} md={2} sm={2}>
                <Button
                    aria-label="Add Task"
                    variant='outlined'
                    className={classes.btn}
                    onClick={submitForm}
                >
                    <AddIcon className={classes.icon} />
                </Button>
            </Grid>
            <Grid item lg={7} md={7} sm={7}>
                <TextField
                    className={classes.txtField}
                    placeholder='Task (max 50)'
                    value={form.task}
                    onChange={handleForm}
                    name='task'
                    required={true}
                    error={form.error && !isTaskValid}
                    helperText={(form.error && !isTaskValid) && 'Pleae fill this field'}
                    inputProps={{
                        maxLength: 50
                    }}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
                <TextField
                    className={classes.txtField}
                    placeholder='Category (max 20)'
                    value={form.category}
                    onChange={handleForm}
                    name='category'
                    required={true}
                    error={form.error && !isCategoryValid}
                    helperText={(form.error && !isCategoryValid) && 'Pleae fill this field'}
                    inputProps={{
                        maxLength: 20
                    }}
                />
            </Grid>
        </Grid>
    );
}

export const TaskForm = withStyles(styles)(TaskFormBase)