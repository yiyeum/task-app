import React, { Dispatch, SetStateAction } from 'react'
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'

interface IProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    handleDelete: () => void
}

export const DeleteModal = (props: IProps) => {
    const { open, setOpen, handleDelete } = props

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
                <DialogContentText id="delete-task-dialog-desc">
                    <Typography color='textPrimary'>You have selected to delete this task.</Typography>
                    <Typography color='textPrimary'>Are you sure you want to delete this item?</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button onClick={handleDelete} autoFocus>
                    <Typography color='error'>Yes, Delete it</Typography>
                </Button>
            </DialogActions>
        </Dialog>

    );
}
