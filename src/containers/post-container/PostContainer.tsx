import React from 'react';
import Button from '@material-ui/core/Button';
import { Post } from '../../seed/seedData';
import { useStyles } from './PostContainer.styles';

interface Props {
  post: Post
}

const PostContainer: React.FC<Props> = ({post}) => {
  const classes = useStyles();
  const {name, imageUrl, location, description, price } = post;

  return (
    <div className={classes.root}>
      <div className={classes.titleSection}>
        <h1>{name}</h1>
        <Button variant='contained' color='primary'>Reply</Button>
      </div>
      <img 
        className={classes.image}
        src={imageUrl} alt="" />
      <div className={classes.locationPrice}>
        <span>{location}</span>
        <span>${price}</span>
      </div>
      <div className={classes.bottomSection}>
        <p>{description}</p>
        <div>
          <Button variant='contained' href='/'>Go Back</Button>
        </div>
      </div>

    </div>
  )  
};

export default PostContainer;