import React, { ReactElement } from 'react'
import { WithStyles, withStyles, Typography } from '@material-ui/core'
import EventSeatIcon from '@material-ui/icons/EventSeat'

const styles = {
    icon: {
        color: '#bdbdbd',
        fontSize: 60
    }
}

const NoListFoundBase = ({ classes }: WithStyles<typeof styles>): ReactElement => {

    return (
        <div data-testid='no-list-found'>
            <EventSeatIcon className={classes.icon} />
            <Typography variant='body1' color='textSecondary'>
                No tasks found
            </Typography>
            <Typography variant='body1' color='textSecondary'>
                Sit back and relax!
            </Typography>
        </div>
    );
}

export const NoListFound = withStyles(styles)(NoListFoundBase)