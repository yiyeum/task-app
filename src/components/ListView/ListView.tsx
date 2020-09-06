import React from 'react'
import { WithStyles, withStyles, Box, Typography } from '@material-ui/core'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import { IList } from '../../models';
import { List } from '..'

const styles = {
    root: {
        backgroundColor: '#FAFAFA',
        padding: 20,
        height: '80vh',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90
    },
    icon: {
        color: '#bdbdbd',
        fontSize: 90
    }
}

interface IProps extends WithStyles<typeof styles> {
    list: IList[]
}

const ListViewBase = (props: IProps) => {
    const { classes, list } = props

    return (
        <div className={classes.root}>
            {
                list.length > 0 ?
                    list.map((item: IList) => {
                        return <List item={item} />
                    })
                    :
                    <Box textAlign='center' mt={20}>
                        <EventSeatIcon className={classes.icon} />
                        <Typography variant='body1' color='textSecondary'>
                            No tasks found
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Sit back and relax!
                        </Typography>
                    </Box>
            }
        </div>
    );
}

export const ListView = withStyles(styles)(ListViewBase)