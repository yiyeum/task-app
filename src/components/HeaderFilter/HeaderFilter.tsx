import React, { ChangeEvent, useContext, ReactElement } from 'react'
import { Grid, InputAdornment, TextField, Typography, WithStyles, withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { IPriorityListItem, ITaskSaverData } from '../../models'
import { TaskSaverContext } from '../../App'
import { PRIORITY_LIST } from '../../assets/constants'
import { Header, PriorityChip } from './'

const styles = {
    root: {
        padding: '3% 11.5%'
    },
    searchField: {
        width: '80%'
    }
}

const HeaderFilterBase = ({ classes }: WithStyles<typeof styles>): ReactElement => {
    const { setSortBy, sortBy }: ITaskSaverData = useContext(TaskSaverContext)
    const { searchQuery } = sortBy

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const formattedValue: string = e.target.value.trim()
        setSortBy({ ...sortBy, 'searchQuery': formattedValue })
    }

    return (
        <Grid container className={classes.root} data-testid='header-filter' alignItems='flex-end'>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Header />
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
                    PRIORITY_LIST.map((priorityItem: IPriorityListItem) => {
                        return (
                            <PriorityChip priorityItem={priorityItem} key={priorityItem.id} />
                        )
                    })
                }
            </Grid>
        </Grid>
    );
}

export const HeaderFilter = withStyles(styles)(HeaderFilterBase)