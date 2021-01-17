import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

const CategoryLink = ({ category, imageURL }) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      border: '1px solid #757373',
      backgroundImage: `url(${imageURL})`,
      backgroundSize: 'cover',
    },
    linkContainer: {
      width: '100%',
      height: '100%',
    },
    link: {
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
      lineHeight: '100%',
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#000',
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.root}>
      <Link className={classes.link}>{category}</Link>
    </Grid>
  );
};

export default CategoryLink;
