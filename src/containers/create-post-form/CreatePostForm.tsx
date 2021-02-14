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
import { Link } from 'react-router-dom';
// Redux State Management:
import { createNewPost } from '../../redux/post/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../redux/post/postTypes';
import { seedCategories } from '../../seed/seedData';
import { RootStore } from '../../redux/store';
import { userState } from '../../redux/user/userReducer';
import { openSnackbar } from '../../redux/snackbars/snackbarsActions';

const CreatePostForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector<RootStore, userState["currentUser"]>((state) => state.user.currentUser);
  const token = useSelector<RootStore, userState["token"]>((state) => state.user.token);
  
  console.log('!!',currentUser)
  const [radioValue, setRadioValue] = useState<string>('');
  const [post, setPost] = useState<Post>({
    title: '',
    price: '',
    location: '',
    category: '',
    subcategory: '',
    description: '',
    image_url: '',
    author: currentUser
  });

  const { title, price, location, description, category, image_url } = post;

  const categoryMap:any = {
    "Electronics": "Goods",
    "Cars": "Goods",
    "Garden": "Goods",
    "Home": "Goods",
    "For Rent": "Housing",
    "For Sale": "Housing",
    "Sublease": "Housing",
    "Food and Bev": "Jobs",
    "Tech": "Jobs",
    "Education": "Jobs",
    "Finance": "Jobs",
    "General Labor": "Jobs"
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
    setPost({...post, subcategory: event.target.value, category: categoryMap[event.target.value]});
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
      author: currentUser
    })
    event.preventDefault();
    
    dispatch(createNewPost(post, token));
    setPost({
      title: '',
      price: '',
      location: '',
      category: '',
      subcategory: '',
      description: '',
      image_url: '',
      author: currentUser
    })
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
      {category === 'Housing' && 
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
            label={category === 'Jobs' ? 'Pay' : 'Price'}
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
          label="Location"
          name='location'
          value={location}
          placeholder="City, State"
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

export default CreatePostForm;