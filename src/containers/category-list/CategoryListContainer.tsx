import React from 'react';
import CategoryLink from '../../components/category-link/CategoryLink';
import { Grid } from '@material-ui/core';
import { useStyles } from './CategoryListContainer.styles';
import { seedCategories } from '../../seed/seedData';

const CategoryListContainer:React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container justify='center' className={classes.root} spacing={2}>
        {seedCategories.map(category => (
          <Grid item xs={12} md={4}>
            <CategoryLink 
              category={category}
              key={category.id}
              />
          </Grid>

        ))}
      </Grid>
    </div>
  );
};

export default CategoryListContainer;