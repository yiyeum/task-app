import React, { SetStateAction, Dispatch, ChangeEvent } from 'react'
import { Grid, Typography, Select, MenuItem } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core';
import { IList } from '../../models';

const styles = {
    root: {
        padding: '3% 11.5%'
    },
    select: {
        width: '80%'
    }
}

interface IProps extends WithStyles<typeof styles> {
    category: string[]
    sortBy: string
    setSortBy: Dispatch<SetStateAction<string>>
    list: IList[]
}

const HeaderSortBase = (props: IProps) => {
    const { classes, category, sortBy, setSortBy, list } = props

    const getTaskProgress = () => {
        const doneLength = list.filter((item: IList) => item.done).length
        return `${doneLength} of ${list.length} tasks`
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={8} md={8} sm={8}>
                <Typography variant='h4' color='textPrimary'>My Tasks</Typography>
                <Typography variant='body1' color='textSecondary'>{getTaskProgress()}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
                <Select
                    className={classes.select}
                    value={sortBy}
                    onChange={(e: ChangeEvent<{ value: unknown }>) => setSortBy(e.target.value as string)}
                >
                    <MenuItem value='all'>All</MenuItem>
                    {
                        category.length > 0 &&
                        category.map((item: string, index: number) => {
                            return <MenuItem value={item} key={index}>{item}</MenuItem>
                        })
                    }
                </Select>
            </Grid>
        </Grid>
    );
}

export const HeaderSort = withStyles(styles)(HeaderSortBase)