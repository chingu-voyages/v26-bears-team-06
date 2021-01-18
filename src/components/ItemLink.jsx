import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

const ItemLink = ({ item, imageURL }) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',

      // margin: '24px',
    },
    linkContainer: {
      backgroundImage: `url(${imageURL})`,
      backgroundSize: 'cover',
      height: '100%',
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={2} className={classes.root}>
      <div className={classes.linkContainer}>
        <Link className={classes.link}></Link>
      </div>
    </Grid>
  );
};

export default ItemLink;
