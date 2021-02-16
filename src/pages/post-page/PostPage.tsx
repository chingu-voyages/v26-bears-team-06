import React from 'react';
import Navbar from '../../containers/navbar/Navbar';
import PostContainer from '../../containers/post-container/PostContainer';
import { useStyles } from './PostPage.styles';

interface Props {
  match: any,
  history: any
}

const PostPage: React.FC<Props> = ({match, history}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <PostContainer match={match} history={history} />
    </div>
  )
};

export default PostPage;