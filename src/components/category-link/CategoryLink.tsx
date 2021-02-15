import React from 'react';
// React Router:
import { Link } from 'react-router-dom';
// Material UI:
import { Grid } from '@material-ui/core';
// Styles:
import { useStyles } from './CategoryLink.styles';
import { Category } from '../../seed/seedData';
interface Props {
  category: Category,
}

const CategoryLink:React.FC<Props> = ({ category }) => {

  const classes = useStyles();

  return (
      <Grid item className={classes.root} style={{backgroundImage: `url(${category.imageURL})`}}>
        <Link to={`/${category.name.toLowerCase()}`} className={classes.link}>{category.name}</Link>
      </Grid>
  );
};

export default CategoryLink;