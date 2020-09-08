import React, { Dispatch, SetStateAction, ChangeEvent, useState } from 'react'
import { Grid, Checkbox, Typography, WithStyles, withStyles, Button, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { ITask, ICategory } from '../../models'
import { DeleteModal, CategoryTag } from '../'
import { formatDate } from '../../utils/format'

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
    setList: Dispatch<SetStateAction<ITask[]>>
    list: ITask[]
    setCategory: Dispatch<SetStateAction<ICategory[]>>
    category: ICategory[]
    setSortBy: Dispatch<SetStateAction<string>>
}

const ListBase = (props: IProps) => {
    const { classes, item, setList, list, setCategory, setSortBy } = props

    const { task, category, createdDate, done } = item
    const [modalState, setModalState] = useState<boolean>(false)

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
        const index: number = list.findIndex(sample => sample.id === item.id)
        const updatedList: ITask = {
            ...item,
            done: e.target.checked
        }
        setList([
            ...list.slice(0, index),
            updatedList,
            ...list.slice(index + 1)
        ])
    }

    const handleDelete = (): void => {
        if (list.filter((i: ITask) => i.category === item.category).length === 1) {
            setCategory(props.category.filter((c: ICategory) => c.name !== item.category.name))
            setSortBy('all')
        }
        setList(list.filter((i: ITask) => i.id !== item.id))
    }

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item lg={1} md={1} sm={1} className={classes.checkboxGrid}>
                    <Checkbox
                        onChange={handleCheckbox}
                        checked={item.done}
                    />
                </Grid>
                <Grid item lg={7} md={9} sm={9}>
                    <Box display='inline-block'>
                        <Typography variant='body1' color='textPrimary' className={done ? classes.done : ''}>
                            {task}
                        </Typography>
                    </Box>
                    <Box display='inline-block' ml={5}>
                        <CategoryTag done={done} category={category} />
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
        </>
    );
}

export const List = withStyles(styles)(ListBase)