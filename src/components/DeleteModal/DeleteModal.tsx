import React, { Dispatch, SetStateAction } from 'react'
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, WithStyles, withStyles, Theme } from '@material-ui/core'

const styles = (theme: Theme) => ({
    actionBtn: {
        color: theme.palette.error.main
    }
})

interface IProps extends WithStyles<typeof styles> {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    handleDelete: () => void
}

const DeleteModalBase = (props: IProps) => {
    const { open, setOpen, handleDelete, classes } = props

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="delete-task-dialog-title"
            aria-describedby="delete-task-dialog-desc"
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle id="delete-task-dialog-title">Delete a Task</DialogTitle>
            <DialogContent>
                <Typography color='textPrimary'>You have selected to delete this task.</Typography>
                <Typography color='textPrimary'>Are you sure you want to delete this item?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={handleDelete} autoFocus className={classes.actionBtn}>
                    Yes, Delete it
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export const DeleteModal = withStyles(styles)(DeleteModalBase)