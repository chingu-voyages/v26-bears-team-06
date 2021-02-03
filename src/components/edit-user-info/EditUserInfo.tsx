import React, { useState, useEffect } from 'react';
// Material UI Components:
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
// Material UI Form Validator:
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Styles:
import { useStyles } from './EditUserInfo.styles';
// Redux State Management:
import { registerAndSetNewUser, setCurrentUser } from '../../redux/user/userActions';
import { User } from '../../redux/user/userTypes';
import { useSelector, useDispatch } from 'react-redux';
import { userState } from '../../redux/user/userReducer';
import { RootStore } from '../../redux/store';

const EditUserInfo:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const users = useSelector<RootStore, userState["users"]>((state) => state.user.users);
  const currentUser = useSelector<RootStore, userState["currentUser"]>((state) => state.user.currentUser);
  const token = useSelector<RootStore, userState["token"]>(state => state.user.token);
  console.log('token', token);
  console.log('CU', currentUser);
  

  useEffect(() => {
    ValidatorForm.addValidationRule('isEmailUnique', (value: string) => 
      users.every(({email}) => email.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('passwordsMustMatch', () => 
      password === passwordConfirmation 
    );
    ValidatorForm.addValidationRule('correctOldPassword', () => 
      oldPassword ===  currentUser?.password
    );
  });

  const [openNameForm, setOpenNameForm] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: currentUser ? currentUser.name : '',
    email: currentUser ? currentUser.email : '',
    password: '',
    city: currentUser ?  currentUser.city : '',
    state: currentUser ? currentUser.state : '',
    zip: currentUser ? currentUser.zip : '',
  }); 

  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');

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
    dispatch(registerAndSetNewUser(user));
    dispatch(setCurrentUser(user)); 
    console.log(user);
    setUser({
      name: '',
      email: '',
      password: '',
      city: '',
      state: '',
      zip: '',
    });
    setPasswordConfirmation('');
    setOldPassword('');
  };

  return (
    <div className={classes.root}>
      <Button color="primary" variant="contained" onClick={handleOpenNameForm}>
        Edit Info
      </Button>
      <Dialog 
        open={openNameForm} 
        onClose={handleCloseNameForm} 
        aria-labelledby="form-dialog-title" 
        className={classes.dialogContainer}
        fullWidth={true}
        maxWidth='md'
        >
          <div className={classes.dialogForms}>
            <ValidatorForm className={classes.signUp} onSubmit={handleSubmit}>
              <DialogTitle id="form-dialog-title">Update</DialogTitle>
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
                label="Old Password" 
                name='oldPassword'
                type='password' 
                variant="outlined"
                value={oldPassword} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                validators={['required']}
                errorMessages={['Password Required']}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="New Password" 
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
                label="Confirm New Password" 
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
                  Update Profile
                </Button>
              </DialogActions>
            </ValidatorForm>
          </div>
      </Dialog>
    </div>
  )
};

export default EditUserInfo;