import React from 'react'
import { Grid, Fab, TextField, WithStyles, withStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
    root: {
        position: 'fixed' as 'fixed',
        bottom: 0,
        zIndex: 9999
    }
}

const TaskFormBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} md={2} sm={2}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
                <TextField />
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
                <TextField />
            </Grid>
        </Grid>
    );
}

export const TaskForm = withStyles(styles)(TaskFormBase)