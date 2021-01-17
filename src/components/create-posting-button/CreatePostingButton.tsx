import React from 'react';
// Material UI Components:
import { Button } from '@material-ui/core';
// This button will eventually render a Post route:
const CreatePostingButton:React.FC = () => {
  return (
    <Button variant="contained">Create Post</Button>
  )
};

export default CreatePostingButton;