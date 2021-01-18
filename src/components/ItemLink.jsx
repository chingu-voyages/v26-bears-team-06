import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

const ItemLink = ({ url, name, price }) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
    },
    linkContainer: {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      height: '100%',
      marginBottom: '1em',
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
    },
    name: {
      fontSize: '0.875em',
      padding: 0,
      margin: '0 0 8px 0',
    },
    price: {
      fontSize: '1em',
      padding: 0,
      margin: 0,
    },
  });

  const classes = useStyles();

  return (
    <Grid item xs={2} className={classes.root}>
      <div className={classes.linkContainer}>
        <Link className={classes.link}></Link>
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.price}>{price}</p>
    </Grid>
  );
};

export default ItemLink;
