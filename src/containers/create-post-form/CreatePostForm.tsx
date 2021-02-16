import React, { useState } from 'react';
// Styles:
import { useStyles } from './CreatePostForm.styles';
// Material UI:
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import CategoryRadioButtons from '../../components/category-radio-buttons/CategoryRadioButtons';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button, TextField } from '@material-ui/core';
// React Router
import { Link, withRouter } from 'react-router-dom';
// Redux State Management:
import { createNewPost } from '../../redux/post/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../redux/post/postTypes';
import { seedCategories } from '../../seed/seedData';
import { RootStore } from '../../redux/store';
import { userState } from '../../redux/user/userReducer';
import { openSnackbar } from '../../redux/snackbars/snackbarsActions';

interface Props {
  history: any
}

const CreatePostForm: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector<RootStore, userState["currentUser"]>((state) => state.user.currentUser);
  const token = useSelector<RootStore, userState["token"]>((state) => state.user.token);
  
  const [radioValue, setRadioValue] = useState<string>('');
  const [post, setPost] = useState<Post>({
    title: '',
    price: '',
    city: '',
    state: '',
    category_id: 0,
    subcategory_id: 0,
    description: '',
    image_url: '',
    user: currentUser
  });

  const { title, price, city, state, description, category_id, image_url } = post;

  const categoryMap:any = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 2
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
    setPost({...post, subcategory_id: parseInt(event.target.value), category_id: categoryMap[event.target.value]});
  };

  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    if(!currentUser){
      dispatch(openSnackbar('You must login to create a post', 'warning'));
      return
    }
    setPost({
      ...post,
      user: currentUser
    })
    event.preventDefault();
    
    dispatch(createNewPost(post, token));
    setPost({
      title: '',
      price: '',
      city: '',
      state: '',
      category_id: 0,
      subcategory_id: 0,
      description: '',
      image_url: '',
      user: currentUser
    });
    history.push(`/user/${currentUser.user_id}`);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit} className={classes.root}>
      <div>
        <FormControl className={classes.radioButtons} component="fieldset" required>
          <FormLabel component="legend">Choose a Category:</FormLabel>
          <RadioGroup 
            className={classes.radioButtons} 
            aria-label="categories" 
            name="categories" 
            value={radioValue} 
            onChange={handleRadioChange}
          >
            {seedCategories.map(({name, subCategories}) => (
              <CategoryRadioButtons name={name} subCategories={subCategories} />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      {category_id === 2 && 
      <div>
        <h1>Housing</h1>
      </div>}
      <div className={classes.textInputs}>
      <FormLabel component="legend">Fill out the fields below:</FormLabel>
      <div className={classes.topRowContainer}>
        <TextField
            id="outlined-textarea"
            label="Post Title"
            name='title'
            value={title}
            placeholder="Title"
            variant="outlined"
            className={classes.postTitleInput}
            onChange={handleTextInputChange}
            required
          />
        <TextField
            id="outlined-textarea"
            label={category_id === 2 ? 'Pay' : 'Price'}
            name='price'
            value={`${price}`}
            placeholder="0"
            variant="outlined"
            className={classes.priceInput}
            onChange={handleTextInputChange}
            required
          />

      </div>
        <TextField
          id="outlined-textarea"
          label="City"
          name='city'
          value={city}
          placeholder="Sacramento"
          multiline
          variant="outlined"
          className={classes.formInput}
          onChange={handleTextInputChange}
          required
        />
        <TextField
          id="outlined-textarea"
          label="State"
          name='state'
          value={state}
          placeholder="CA"
          multiline
          variant="outlined"
          className={classes.formInput}
          onChange={handleTextInputChange}
          required
        />
        <TextField
          id="outlined-textarea"
          label="Image Url"
          name='image_url'
          value={image_url}
          placeholder="Image URL"
          multiline
          variant="outlined"
          className={classes.formInput}
          onChange={handleTextInputChange}
          required
        />
        <TextField
          id="outlined-textarea"
          label="Description"
          name="description"
          value={description}
          placeholder="Description"
          multiline
          variant="outlined"
          className={classes.formInput}
          onChange={handleTextInputChange}
          rows={20}
          required
        />
      </div>
      <div className={classes.buttons}>
        <Button 
          variant='contained'
          color='primary'
          className={classes.button}
          type='submit'
          >
            Submit Post
          </Button>
        <Link to='/' className={classes.link}>
          <Button 
            variant='contained'
            color='default'
            className={classes.button}
          >
            Go to Homepage
          </Button>
        </Link>
      </div>
    </ValidatorForm>
  )
};

export default withRouter(CreatePostForm);