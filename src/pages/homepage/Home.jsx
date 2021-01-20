import React from 'react';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import ItemListContainer from '../../containers/post-list/PostListContainer';
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
