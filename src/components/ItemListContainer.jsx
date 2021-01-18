import React from 'react';
import Headline2 from './Headline2';
import ItemLink from './ItemLink';
import { makeStyles, Grid } from '@material-ui/core';

const ItemListContainer = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height: '240px',
    },
  });

  const classes = useStyles();
  const imageURL =
    'https://images.unsplash.com/photo-1513135724701-30343e546328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80';

  return (
    <div>
      <Headline2 headline="Recently posted in your area" />
      <Grid container spacing={3} className={classes.root}>
        <ItemLink url={imageURL} name="item name" price="$50" />
        <ItemLink url={imageURL} name="item name" price="$50" />
        <ItemLink url={imageURL} name="item name" price="$50" />
        <ItemLink url={imageURL} name="item name" price="$50" />
        <ItemLink url={imageURL} name="item name" price="$50" />
        <ItemLink url={imageURL} name="item name" price="$50" />
      </Grid>
    </div>
  );
};

export default ItemListContainer;
