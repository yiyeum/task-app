import React from 'react'
import { Grid, Checkbox, Typography, WithStyles, withStyles, Button, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { IList } from '../../models'

const styles = {
    root: {
        borderBottom: '1px solid #E5E5E5',
        padding: 20
    },
    checkboxGrid: {
        textAlign: 'center' as 'center'
    },
    icon: {
        color: '#757575'
    },
    tag: {
        backgroundColor: '#FFDEDE',
        padding: '3px 10px',
        borderRadius: 10
    }
}

interface IProps extends WithStyles<typeof styles> {
    item: IList
}

const ListBase = (props: IProps) => {
    const { classes, item } = props
    const { task, category } = item

    return (
        <Grid container className={classes.root}>
            <Grid item lg={1} md={1} sm={1} className={classes.checkboxGrid}><Checkbox /></Grid>
            <Grid item lg={7} md={9} sm={9}>
                <Box display='inline-block'>
                    <Typography variant='body1' color='textPrimary'>{task}</Typography>
                </Box>
                <Box display='inline-block' ml={5}>
                    <div className={classes.tag}>
                        <Typography variant='body2' color='textPrimary'>{category}</Typography>
                    </div>
                </Box>
                <Box display='block'>
                    <Typography variant='caption' color='textSecondary'>Sep 2, 2020</Typography>
                </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1}>
                <Button><DeleteIcon className={classes.icon} /></Button>
            </Grid>
        </Grid>
    );
}

export const List = withStyles(styles)(ListBase)