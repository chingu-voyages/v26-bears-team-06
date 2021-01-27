import React from 'react';
import CategoryLink from '../../components/category-link/CategoryLink';
import { Grid } from '@material-ui/core';
import { useStyles } from './CategoryListContainer.styles';
import { seedCategories } from '../../seed/seedData';

const CategoryListContainer:React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container className={classes.root}>
        {seedCategories.map(category => (
          <CategoryLink 
            category={category}
            key={category.id}
            />
        ))}
      </Grid>
    </div>
  );
};

export default CategoryListContainer;