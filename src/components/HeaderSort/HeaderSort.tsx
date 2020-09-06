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
}

const HeaderSortBase = (props: IProps) => {
    const { classes, category, sortBy, setSortBy } = props

    return (
        <Grid container className={classes.root}>
            <Grid item lg={8} md={8} sm={8}>
                <Typography variant='h4' color='textPrimary'>My Tasks</Typography>
                <Typography variant='body1' color='textSecondary'>1 of 3 tasks</Typography>
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
                        category.map((item: string) => {
                            return <MenuItem value={item}>{item}</MenuItem>
                        })
                    }
                </Select>
            </Grid>
        </Grid>
    );
}

export const HeaderSort = withStyles(styles)(HeaderSortBase)