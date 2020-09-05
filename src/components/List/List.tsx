import React from 'react'
import { Grid, Checkbox, Typography, WithStyles, withStyles } from '@material-ui/core'

const styles = {
    root: {
        borderBottom: '1px solid #E5E5E5',
        padding: 20
    }
}

const ListBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} md={2} sm={2}><Checkbox /></Grid>
            <Grid item lg={9} md={9} sm={9}>
                <Typography variant='body1'>Clean Washroom</Typography>
                <Typography variant='caption'>Sep 2, 2020</Typography>
            </Grid>
            <Grid item lg={1} md={1} sm={1}>TD</Grid>
        </Grid>
    );
}

export const List = withStyles(styles)(ListBase)