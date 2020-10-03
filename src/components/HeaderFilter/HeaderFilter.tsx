import React, { ChangeEvent, useContext } from 'react'
import { Chip, Grid, InputAdornment, TextField, Typography, WithStyles, withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { IPriorityListItem, ITask, ITaskSaverData } from '../../models'
import { TaskSaverContext } from '../../App'
import { PRIORITY_LIST } from '../../assets/constants'

const styles = {
    root: {
        padding: '3% 11.5%'
    },
    searchField: {
        width: '80%'
    },
    chip: {
        marginRight: 10,
        marginTop: 5,
        color: '#333333',
        backgroundColor: '#d5ffbb !important',
        '&:hover': {
            backgroundColor: '#9fc388'
        }
    },
    activeColor: {
        backgroundColor: '#9fc388 !important'
    }
}

const HeaderFilterBase = ({ classes }: WithStyles<typeof styles>) => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { tasks, setSortBy, sortBy } = taskSaverData
    const { searchQuery, priorityFilter } = sortBy

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const formattedValue: string = e.target.value.trim()
        setSortBy({ ...sortBy, 'searchQuery': formattedValue })
    }

    const getTaskProgress = (): string => {
        const doneLength: number = tasks.filter((item: ITask) => item.done).length
        return `${doneLength} of ${tasks.length} tasks`
    }

    const checkNewPriority = (selectedPriority: string): boolean => {
        return priorityFilter.filter((priority: string) => priority === selectedPriority).length > 0
    }

    const handleOnClick = (selectedPriority: string): void => {
        if (checkNewPriority(selectedPriority)) {
            setSortBy({ ...sortBy, priorityFilter: [...priorityFilter.filter((item: string) => item !== selectedPriority)] })
        } else {
            setSortBy({ ...sortBy, priorityFilter: [...priorityFilter, selectedPriority] })
        }
    }

    return (
        <Grid container className={classes.root} data-testid='header' alignItems='flex-end'>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Typography variant='h4' color='textPrimary'>Task Saver</Typography>
                <Typography variant='body1' color='textSecondary'>{getTaskProgress()}</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <TextField
                    className={classes.searchField}
                    value={searchQuery}
                    onChange={handleOnChange}
                    inputProps={{ maxLength: 50 }}
                    placeholder='Search by task contents'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography variant='body1' color='textPrimary'>Sort by priority:</Typography>
                {
                    PRIORITY_LIST.map((list: IPriorityListItem) => {
                        return (
                            <Chip
                                className={`${classes.chip} ${checkNewPriority(list.name) ? classes.activeColor : ''}`}
                                key={list.id}
                                label={list.name}
                                clickable
                                onClick={() => handleOnClick(list.name)}
                            />
                        )
                    })
                }
            </Grid>
        </Grid>
    );
}

export const HeaderFilter = withStyles(styles)(HeaderFilterBase)