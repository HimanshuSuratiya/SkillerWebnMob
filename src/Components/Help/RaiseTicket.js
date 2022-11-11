import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@material-ui/core/Typography';
import { IconButton, Divider } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { TextField, TextareaAutosize } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RaiseTicket = ({ setClosePopUp, popUp }) => {
    const handleClose = () => {
        setClosePopUp(false);
    };

    return (
        <div>
            <Dialog
                open={popUp}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <div className="d-flex justify-content-between align-items-center">
                        <Typography variant="h5">
                            {"Raise ticket"}
                        </Typography>
                        <IconButton>
                            <CloseIcon onClick={() => { setClosePopUp(false) }} />
                        </IconButton>
                    </div>
                </DialogTitle>
                <Divider style={{ backgroundColor: 'gray' }} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <TextField
                            className="mb-3"
                            fullWidth
                            variant='outlined'
                            size='large'
                            label={'Name'}
                        />
                        <TextField
                            fullWidth
                            className="mb-3"
                            variant='outlined'
                            size='large'
                            label={'Email'}
                        />
                        <TextField
                            fullWidth
                            className="mb-3"
                            variant='outlined'
                            size='large'
                            label={'Phone'}
                        />
                        <TextareaAutosize
                            className='p-2'
                            aria-label="minimum height"
                            minRows={2}
                            style={{ width: '100%' }}
                            placeholder="Description"
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='px-4 py-4'>
                    <Button variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default RaiseTicket
