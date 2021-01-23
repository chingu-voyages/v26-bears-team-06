import React from 'react';
// React Router:
import { Link } from 'react-router-dom';
// Material UI:
import { Grid } from '@material-ui/core';
// Styles:
import { useStyles } from './CategoryLink.styles';
interface Props {
  category: string,
  imageURL: string,
}

const CategoryLink:React.FC<Props> = ({ category, imageURL }) => {

  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.root} style={{backgroundImage: `url(${imageURL})`}}>
      <Link to='/' className={classes.link}>{category}</Link>
    </Grid>
  );
};

export default CategoryLink;

