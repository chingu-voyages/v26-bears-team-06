import React, { useState } from 'react';
// Material UI Components:
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
// Material UI Form Validator:
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Styles:
import { useStyles } from './EditPost.styles';
// Redux State Management:
import { updatePost } from '../../redux/post/postActions';
import { Post } from '../../redux/post/postTypes';
import { useSelector, useDispatch } from 'react-redux';
import { postState } from '../../redux/post/postReducer';
import { userState } from '../../redux/user/userReducer';
import { RootStore } from '../../redux/store';

const EditPostInfo:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentUser = useSelector<RootStore, userState["currentUser"]>((state) => state.user.currentUser);
  const currentPost = useSelector<RootStore, postState['currentPost']>(state => state.post.currentPost);
  const token = useSelector<RootStore, userState["token"]>((state) => state.user.token);

  const [openNameForm, setOpenNameForm] = useState<boolean>(false);

  const [post, setPost] = useState<Post>({
    title: '',
    price: '',
    location: '',
    image_url: '',
    category: '',
    subcategory: '',
    description: '',
  }); 

  // const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  // const [oldPassword, setOldPassword] = useState<string>('');

  const handleOpenNameForm = () => {
    
    setPost({
      title: currentPost ? currentPost.title : '',
      price: currentPost ? currentPost.price : '',
      location: currentPost ?  currentPost.location : '',
      image_url: currentPost ?  currentPost.image_url : '',
      category: currentPost ?  currentPost.category : '',
      subcategory: currentPost ?  currentPost.subcategory : '',
      description: currentPost ? currentPost.description : '',
      author: currentPost.author
    });
    setOpenNameForm(true);
    console.log('POST:', post)
  };

  const handleCloseNameForm = () => {
    setOpenNameForm(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const updatedPost = post;
    dispatch(updatePost(updatedPost, currentUser.user_id, token));
    setOpenNameForm(false);
    // setPasswordConfirmation('');
    // setOldPassword('');
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
                label="Title" 
                name='title'
                variant="outlined"
                value={post.title}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['Title required']}
               />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Price" 
                name='price'
                variant="outlined"
                type="price"
                value={post.price}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['Price Required']}
                />
              {/* <TextValidator 
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
                /> */}
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Location" 
                name='location'
                variant="outlined"
                value={post.location}
                onChange={handleChange}
                 />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Image URL" 
                name='image_url'
                variant="outlined"
                value={post.image_url}
                onChange={handleChange}
                />
              <TextValidator 
                className={classes.input} 
                id="outlined-basic" 
                label="Description" 
                name='description'
                variant="outlined"
                value={post.description}
                onChange={handleChange}
                />
              <DialogActions>
                <Button type='submit' color="primary" variant='contained'>
                  Update Your Post
                </Button>
              </DialogActions>
            </ValidatorForm>
          </div>
      </Dialog>
    </div>
  )
};

export default EditPostInfo;