import React from 'react';
import CreatePostForm from '../../containers/create-post-form/CreatePostForm';
import { useStyles } from './CreatePostPage.styles';

const CreatePostPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>List your Post</h1>
      <CreatePostForm />
    </div>
  )
}

export default CreatePostPage;