import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';

const ItemLink = ({ url, name, price }) => {
  const useStyles = makeStyles({
    root: {
      height: '100%',

      // margin: '24px',
    },
    linkContainer: {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      height: '100%',
      marginBottom: '16px',
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
    },
    name: {
      fontSize: '14px',
      padding: 0,
      margin: '0 0 8px 0',
    },
    price: {
      fontSize: '16px',
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
