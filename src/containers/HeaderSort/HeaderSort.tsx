import React from 'react'
import { Grid, Typography, Select } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core';

const styles = {
    root: {
        padding: '3% 11.5%'
    },
    select: {
        width: '80%'
    }
}

const HeaderSortBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Grid container className={classes.root}>
            <Grid item lg={8} md={8} sm={8}>
                <Typography variant='h4' color='textPrimary'>My Tasks</Typography>
                <Typography variant='body1' color='textSecondary'>1 of 3 tasks</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
                <Select className={classes.select} />
            </Grid>
        </Grid>
    );
}

export const HeaderSort = withStyles(styles)(HeaderSortBase)