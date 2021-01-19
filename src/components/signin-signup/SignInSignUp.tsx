import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './SignInSignUp.styles';

interface Props {
  
}

const SignInSignUp:React.FC<Props> = () => {
  const classes = useStyles();

  const [openNameForm, setOpenNameForm] = useState(false);

  const handleOpenNameForm = () => {
    setOpenNameForm(true);
  };

  const handleCloseNameForm = () => {
    setOpenNameForm(false);
  };

  return (
    <div className={classes.root}>
      <Button color="primary" onClick={handleOpenNameForm}>
        Sign Up / Login
      </Button>
      <Dialog 
        open={openNameForm} 
        onClose={handleCloseNameForm} 
        aria-labelledby="form-dialog-title" 
        className={classes.dialogContainer}
        fullWidth={true}
        maxWidth='lg'
        >
          <DialogContent>
            <DialogContentText>
              Please fill out the fields below: 
            </DialogContentText>
          </DialogContent>
          <div className={classes.dialogForms}>
            <form className={classes.signIn}>
              <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
              <TextField className={classes.input} id="outlined-basic" label="Email" />
              <TextField className={classes.input} id="outlined-basic" label="Password" />
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>
                  Sign In
                </Button>
              </DialogActions>
            </form>
            <Divider variant='middle' orientation='vertical' flexItem/>
            <form className={classes.signUp}>
              <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
              <TextField className={classes.input} id="outlined-basic" label="Name" variant="outlined" />
              <TextField className={classes.input} id="outlined-basic" label="Email" variant="outlined" />
              <TextField className={classes.input} id="outlined-basic" label="Password" variant="outlined" />
              <TextField className={classes.input} id="outlined-basic" label="Confirm Password" variant="outlined" />
              <TextField className={classes.input} id="outlined-basic" label="Location" variant="outlined" />
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>
                  Sign Up
                </Button>
              </DialogActions>
            </form>
          </div>
      </Dialog>
    </div>
  )
};

export default SignInSignUp;