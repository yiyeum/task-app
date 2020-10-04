import React, { useContext, ReactElement } from 'react'
import { Chip, WithStyles, withStyles } from '@material-ui/core'
import { IPriorityListItem, ITaskSaverData } from '../../models'
import { TaskSaverContext } from '../../App'

const styles = {
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

interface IProps extends WithStyles<typeof styles> {
    priorityItem: IPriorityListItem
}

const PriorityChipBase = ({ classes, priorityItem }: IProps): ReactElement => {
    const taskSaverData: ITaskSaverData = useContext(TaskSaverContext)
    const { setSortBy, sortBy } = taskSaverData
    const { priorityFilter } = sortBy

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
        <Chip
            data-testid='priority-chip'
            className={`${classes.chip} ${checkNewPriority(priorityItem.name) ? classes.activeColor : ''}`}
            key={priorityItem.id}
            label={priorityItem.name}
            clickable
            onClick={() => handleOnClick(priorityItem.name)}
        />
    );
}

export const PriorityChip = withStyles(styles)(PriorityChipBase)