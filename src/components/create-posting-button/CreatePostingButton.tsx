import React from 'react';
// Material UI Components:
import { Button } from '@material-ui/core';
// React Router: 
import {Link} from 'react-router-dom'
// Styles: 
import { useStyles } from './CreatePostingButton.styles';
const CreatePostingButton:React.FC = () => {
  const classes = useStyles();

  return (
    <Link to='/posts/new' className={classes.link}><Button variant="contained" className={classes.button}>Create Post</Button></Link>
  )
};

export default CreatePostingButton;