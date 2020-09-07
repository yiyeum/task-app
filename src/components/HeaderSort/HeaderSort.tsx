import React, { SetStateAction, Dispatch, ChangeEvent } from 'react'
import { Grid, Typography, Select, MenuItem } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core';
import { IList, ICategory } from '../../models';
import bgImage from '../../assets/images/bg.png'

const styles = {
    root: {
        padding: '3% 11.5%',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
    },
    select: {
        width: '80%'
    }
}

interface IProps extends WithStyles<typeof styles> {
    category: ICategory[]
    sortBy: string
    setSortBy: Dispatch<SetStateAction<string>>
    list: IList[]
}

const HeaderSortBase = (props: IProps) => {
    const { classes, category, sortBy, setSortBy, list } = props

    const getTaskProgress = (): string => {
        const doneLength = list.filter((item: IList) => item.done).length
        return `${doneLength} of ${list.length} tasks`
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <Typography variant='h4' color='textPrimary'>My Tasks</Typography>
                <Typography variant='body1' color='textSecondary'>{getTaskProgress()}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Select
                    className={classes.select}
                    value={sortBy}
                    onChange={(e: ChangeEvent<{ value: unknown }>) => setSortBy(e.target.value as string)}
                >
                    <MenuItem value='all'>All</MenuItem>
                    {
                        category.length > 0 &&
                        category.map((item: ICategory, index: number) => {
                            return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                        })
                    }
                </Select>
            </Grid>
        </Grid>
    );
}

export const HeaderSort = withStyles(styles)(HeaderSortBase)