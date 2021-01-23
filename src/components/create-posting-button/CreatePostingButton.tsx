import React from 'react';
// Material UI Components:
import { Button } from '@material-ui/core';
// React Router 
import {Link} from 'react-router-dom'
const CreatePostingButton:React.FC = () => {
  return (
    <Button variant="contained"><Link to='/posts/new'>Create Post</Link></Button>
  )
};

export default CreatePostingButton;