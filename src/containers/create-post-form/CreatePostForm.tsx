import React, { useState } from 'react';
// Styles:
import { useStyles } from './CreatePostForm.styles';
// Material UI:
import FormControl from '@material-ui/core/FormControl';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Post, seedCategories } from '../../seed/seedData';
import CategoryRadioButtons from '../../components/category-radio-buttons/CategoryRadioButtons';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button, TextField } from '@material-ui/core';
// React Router
import { Link } from 'react-router-dom';
// Redux State Management:
import { createNewPost } from '../../redux/post/postActions';
import { useDispatch } from 'react-redux';

const CreatePostForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [radioValue, setRadioValue] = useState<string>('');
  const [post, setPost] = useState<Post>({
    name: '',
    id: '',
    price: '',
    location: '',
    category: '',
    subCategory: '',
    description: '',
    imageUrl: '',
  })

  const { name, price, location, description, category} = post;

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
    setPost({...post, subCategory: event.target.value, category: categoryMap[event.target.value]});
  };

  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createNewPost(post));
    setPost({
      name: '',
      id: '',
      price: '',
      location: '',
      category: '',
      subCategory: '',
      description: '',
      imageUrl: ''
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
            name='name'
            value={name}
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