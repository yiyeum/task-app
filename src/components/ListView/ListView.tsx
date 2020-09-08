import React, { Dispatch, SetStateAction } from 'react'
import { WithStyles, withStyles, Box } from '@material-ui/core'
import { ITask, ICategory } from '../../models'
import { List, NoListFound } from '../'

const styles = {
    root: {
        backgroundColor: '#FAFAFA',
        padding: 20,
        minHeight: '100vh',
        marginBottom: '95px',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90
    }
}

interface IProps extends WithStyles<typeof styles> {
    list: ITask[]
    sortBy: string
    setList: Dispatch<SetStateAction<ITask[]>>
    setCategory: Dispatch<SetStateAction<ICategory[]>>
    category: ICategory[]
    setSortBy: Dispatch<SetStateAction<string>>
}

const ListViewBase = (props: IProps) => {
    const { classes, list, sortBy, setList, setCategory, category, setSortBy } = props

    const filterTodos = (allTodoItems: ITask[], selectedCategory: string): ITask[] => {
        if (allTodoItems.length > 0) {
            if (selectedCategory === 'all') {
                return allTodoItems
            }
            return allTodoItems.filter((item: ITask) => {
                return item.category.name === selectedCategory
            })
        }
        return []
    }

    return (
        <div className={classes.root} data-testid='list-view'>
            {
                filterTodos(list, sortBy).length > 0 ?
                    filterTodos(list, sortBy).map((item: ITask) => {
                        return (
                            <List
                                item={item}
                                setList={setList}
                                list={list}
                                key={item.id}
                                setCategory={setCategory}
                                category={category}
                                setSortBy={setSortBy}
                            />
                        )
                    })
                    :
                    <Box textAlign='center' mt={20}>
                        <NoListFound />
                    </Box>
            }
        </div>
    );
}

export const ListView = withStyles(styles)(ListViewBase)