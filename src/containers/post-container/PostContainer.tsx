import React from 'react';
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
        <button>Contact Seller</button>
      </div>
      <img 
        className={classes.image}
        src={imageUrl} alt="" />
      <div className={classes.locationPrice}>
        <span>{location}</span>
        <span>${price}</span>
      </div>
      <p>{description}</p>
      <div>
        <button>Go Back</button>
      </div>
    </div>
  )  
};

export default PostContainer;