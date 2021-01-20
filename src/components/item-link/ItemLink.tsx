import React from 'react';
// React Router:
import { Link } from 'react-router-dom';
// Material UI:
import { Grid } from '@material-ui/core';
// Styles:
import { useStyles } from './ItemLink.styles';

interface Props {
  url: string,
  name: string,
  price: string,
}

const ItemLink:React.FC<Props> = ({ url, name, price }) => {

  const classes = useStyles();

  return (
    <Grid item xs={2} className={classes.root}>
      <div 
        className={classes.linkContainer} 
        style={{backgroundImage: `url(${url})`}}
        >
        <Link to='/' className={classes.link}></Link>
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.price}>{price}</p>
    </Grid>
  );
};

export default ItemLink;
