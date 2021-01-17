import React from 'react';
import CategoryListContainer from '../components/CategoryListContainer';
import ItemListContainer from '../components/ItemListContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homeContainer: {
    width: '1200px',
    margin: '0 auto',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <CategoryListContainer />
      <ItemListContainer />
    </div>
  );
};

export default Home;
