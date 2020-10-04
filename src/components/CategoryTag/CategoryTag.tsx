import React, { ReactElement } from 'react'
import { Typography, WithStyles, withStyles } from '@material-ui/core'
import { ICategory } from '../../models'

const styles = {
    done: {
        textDecoration: 'line-through'
    },
    tag: {
        padding: '3px 10px',
        borderRadius: 10
    }
}

interface IProps extends WithStyles<typeof styles> {
    category: ICategory
    done: boolean
}

const CategoryTagBase = ({ classes, category, done }: IProps): ReactElement => {
    return (
        <div data-testid='category-tag' className={classes.tag} style={{ backgroundColor: `${category.hsl}` }}>
            <Typography
                variant='body2'
                color='textPrimary'
                className={done ? classes.done : ''}
            >
                {category.name}
            </Typography>
        </div>
    );
}

export const CategoryTag = withStyles(styles)(CategoryTagBase)