import React, { useState } from 'react';
// Material UI Components:
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
// Styles:
import { useStyles } from './SignInSignUp.styles';
// Redux State Management:
import { registerNewUser } from '../../redux/user/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { userState } from '../../redux/user/userReducer';

interface Props {
  
}

const SignInSignUp:React.FC<Props> = () => {
  const classes = useStyles();
  const users = useSelector<any, userState["users"]>((state) => state.user.users);
  const dispatch = useDispatch();

  const [openNameForm, setOpenNameForm] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    city: '',
    state: '',
    zip: ''
  });

  const { name, email, password, passwordConfirmation, city, state, zip } = user;

  const handleOpenNameForm = () => {
    setOpenNameForm(true);
  };

  const handleCloseNameForm = () => {
    setOpenNameForm(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    password === passwordConfirmation ? dispatch(registerNewUser(user)) : alert('passwords dont match!');
    console.log(users);
    setUser({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      city: '',
      state: '',
      zip: '',
    });
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
              Please fill out one of the forms below: 
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
            <form className={classes.signUp} onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="Name" 
                name='name'
                variant="outlined"
                value={name}
                onChange={handleChange}
                required
               />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="Email" 
                name='email'
                variant="outlined"
                type="email"
                value={email}
                onChange={handleChange}
                required 
                />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="Password" 
                name='password'
                type='password' 
                variant="outlined"
                value={password}
                onChange={handleChange} 
                required
                />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="Confirm Password" 
                name='passwordConfirmation'
                type='password' 
                variant="outlined"
                value={passwordConfirmation}
                onChange={handleChange}
                required
                />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="City" 
                name='city'
                variant="outlined"
                value={city}
                onChange={handleChange}
                required
                 />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="State" 
                name='state'
                variant="outlined"
                value={state}
                onChange={handleChange}
                required
                />
              <TextField 
                className={classes.input} 
                id="outlined-basic" 
                label="Zip Code" 
                name='zip'
                variant="outlined"
                value={zip}
                onChange={handleChange}
                required
                />
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>
                  Join now!
                </Button>
              </DialogActions>
            </form>
          </div>
      </Dialog>
    </div>
  )
};

export default SignInSignUp;