import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core'
import { ITask, ITaskSaverData } from '../../models'
import bgImage from '../../assets/images/bg.png'
import { TaskSaverContext } from '../../App'

const styles = {
    root: {
        padding: '3% 11.5%',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
    }
}

const HeaderBase = ({ classes }: WithStyles<typeof styles>) => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks } = taskSaverData

    const getTaskProgress = (): string => {
        const doneLength: number = tasks.filter((item: ITask) => item.done).length
        return `${doneLength} of ${tasks.length} tasks`
    }

    return (
        <Grid container className={classes.root} data-testid='header'>
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <Typography variant='h4' color='textPrimary'>My Tasks</Typography>
                <Typography variant='body1' color='textSecondary'>{getTaskProgress()}</Typography>
            </Grid>
        </Grid>
    );
}

export const Header = withStyles(styles)(HeaderBase)