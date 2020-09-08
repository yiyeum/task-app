import React from 'react'
import { WithStyles, withStyles, Typography } from '@material-ui/core'
import EventSeatIcon from '@material-ui/icons/EventSeat'

const styles = {
    icon: {
        color: '#bdbdbd',
        fontSize: 90
    }
}

const NoListFoundBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <>
            <EventSeatIcon className={classes.icon} />
            <Typography variant='body1' color='textSecondary'>
                No tasks found
            </Typography>
            <Typography variant='body1' color='textSecondary'>
                Sit back and relax!
            </Typography>
        </>
    );
}

export const NoListFound = withStyles(styles)(NoListFoundBase)