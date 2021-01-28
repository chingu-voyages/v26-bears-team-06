import React, { useState, useEffect } from 'react';
// Material UI Components:
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
// Material UI Form Validator:
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Styles:
import { useStyles } from './SignInSignUp.styles';
// Redux State Management:
import { registerNewUser } from '../../redux/user/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { userState } from '../../redux/user/userReducer';
import { User } from '../../seed/seedData';

const SignInSignUp:React.FC = () => {
  const classes = useStyles();
  
  const users = useSelector<any, userState["users"]>((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    ValidatorForm.addValidationRule('isEmailUnique', (value: string) => 
      users.every(({email}) => email.toLocaleLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('passwordsMustMatch', () => 
      password === passwordConfirmation 
    )
  })

  const [openNameForm, setOpenNameForm] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zip: '',
  }); 
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const { name, email, password, city, state, zip } = user;

  const handleOpenNameForm = () => {
    setOpenNameForm(true);
  };

  const handleCloseNameForm = () => {
    setOpenNameForm(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    password === passwordConfirmation ? dispatch(registerNewUser(user)) : alert('passwords dont match!');
    console.log(users);
    setUser({
      name: '',
      email: '',
      password: '',
      city: '',
      state: '',
      zip: '',
    });
    setPasswordConfirmation('');
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
          <DialogContentText className={classes.dialogContentText}>
            Please fill out one of the forms below: 
          </DialogContentText>
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
            <ValidatorForm className={classes.signUp} onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Name" 
                name='name'
                variant="outlined"
                value={name}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['Name required']}
               />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Email" 
                name='email'
                variant="outlined"
                type="email"
                value={email}
                onChange={handleChange}
                validators={['required', 'isEmailUnique']}
                errorMessages={['Email Required', 'This email is already in use, please sign in']}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Password" 
                name='password'
                type='password' 
                variant="outlined"
                value={password}
                onChange={handleChange} 
                validators={['required']}
                errorMessages={['Password Required']}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Confirm Password" 
                name='passwordConfirmation'
                type='password' 
                variant="outlined"
                value={passwordConfirmation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
                validators={['required', 'passwordsMustMatch']}
                errorMessages={['Confirm Password', 'Passwords must match']}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="City" 
                name='city'
                variant="outlined"
                value={city}
                onChange={handleChange}
                 />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="State" 
                name='state'
                variant="outlined"
                value={state}
                onChange={handleChange}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Zip Code" 
                name='zip'
                variant="outlined"
                value={zip}
                onChange={handleChange}
                />
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>
                  Join now!
                </Button>
              </DialogActions>
            </ValidatorForm>
          </div>
      </Dialog>
    </div>
  )
};

export default SignInSignUp;