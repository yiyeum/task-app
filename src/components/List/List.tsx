import React, { Dispatch, SetStateAction, ChangeEvent } from 'react'
import moment from 'moment'
import { Grid, Checkbox, Typography, WithStyles, withStyles, Button, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { IList } from '../../models'

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
    item: IList
    setList: Dispatch<SetStateAction<IList[]>>
    list: IList[]
}

const ListBase = (props: IProps) => {
    const { classes, item, setList, list } = props
    const { task, category, createdDate, done } = item

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const index: number = list.findIndex(sample => sample.id === item.id)
        const updatedList: IList = {
            ...item,
            done: e.target.checked
        }

        setList([
            ...list.slice(0, index),
            updatedList,
            ...list.slice(index + 1)
        ])
    }

    return (
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
                    <div className={classes.tag}>
                        <Typography variant='body2' color='textPrimary' className={done ? classes.done : ''}>
                            {category}
                        </Typography>
                    </div>
                </Box>
                <Box display='block'>
                    <Typography variant='caption' color='textSecondary'>
                        {moment(createdDate).format('MMM Do, YYYY')}
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1}>
                <Button><DeleteIcon className={classes.icon} /></Button>
            </Grid>
        </Grid>
    );
}

export const List = withStyles(styles)(ListBase)