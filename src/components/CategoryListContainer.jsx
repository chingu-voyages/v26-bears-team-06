import React from 'react';
import Headline2 from './Headline2';
import CategoryLink from './CategoryLink';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  categoryContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '320px',
    gridTemplateAreas: 'category1 category2 category3',
  },
});

const CategoryListContainer = () => {
  const classes = useStyles();
  const communityImageURL =
    'https://images.unsplash.com/photo-1550096141-7263640aa48c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
  const saleImageURL =
    'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=654&q=80';

  const jobsImageURL =
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  return (
    <div>
      <Headline2 headline="San Francisco, CA" />
      <div className={classes.categoryContainer}>
        <CategoryLink category="community" imageURL={communityImageURL} />
        <CategoryLink category="for sale" imageURL={saleImageURL} />
        <CategoryLink category="jobs" imageURL={jobsImageURL} />
      </div>
    </div>
  );
};

export default CategoryListContainer;
