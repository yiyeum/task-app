import React from 'react'
import { Grid, TextField, WithStyles, withStyles, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

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

const TaskFormBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} md={2} sm={2}>
                <Button aria-label="Add Task" variant='outlined' className={classes.btn}>
                    <AddIcon className={classes.icon} />
                </Button>
            </Grid>
            <Grid item lg={7} md={7} sm={7}>
                <TextField
                    className={classes.txtField}
                    placeholder='Task (max 50)'
                />
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
                <TextField
                    className={classes.txtField}
                    placeholder='Category (max 20)'
                />
            </Grid>
        </Grid>
    );
}

export const TaskForm = withStyles(styles)(TaskFormBase)