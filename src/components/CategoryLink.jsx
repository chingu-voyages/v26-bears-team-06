import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

const CategoryLink = ({ category, imageURL }) => {
  const useStyles = makeStyles({
    categoryLink: {
      backgroundColor: 'red',
      border: '1px solid #757373',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${imageURL})`,
      backgroundSize: 'cover',
      textDecoration: 'none',
    },
    categorTitle: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#000',
    },
  });
  const classes = useStyles();
  console.log(imageURL);
  return (
    <Link className={classes.categoryLink}>
      <p className={classes.categoryLink}>{category}</p>
    </Link>
  );
};

export default CategoryLink;
