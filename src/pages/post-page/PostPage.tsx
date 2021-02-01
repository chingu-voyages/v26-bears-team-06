import React from 'react';
import Navbar from '../../containers/navbar/Navbar';
import PostContainer from '../../containers/post-container/PostContainer';
import { Post } from '../../seed/seedData';
import { useStyles } from './PostPage.styles';

interface Props {
  post: Post
}

const PostPage: React.FC<Props> = ({post}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <PostContainer post={post} />
    </div>
  )
};

export default PostPage;