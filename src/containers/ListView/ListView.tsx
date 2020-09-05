import React from 'react'
import { List } from '../../components'
import { WithStyles, withStyles } from '@material-ui/core';

const styles = {
    root: {
        backgroundColor: '#FAFAFA',
        padding: 20,
        height: '80vh',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90
    }
}

const ListViewBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <div className={classes.root}>
            <List />
        </div>
    );
}

export const ListView = withStyles(styles)(ListViewBase)