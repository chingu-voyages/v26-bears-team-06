import React from 'react';
// React Router:
import { Link } from 'react-router-dom';
// Material UI:
import { Grid } from '@material-ui/core';
// Styles:
import { useStyles } from './ItemLink.styles';
interface Props {
  imageUrl: string,
  title: string,
  price: string,
  id: string
};

const ItemLink:React.FC<Props> = ({ imageUrl, title, price, id }) => {

  const classes = useStyles();

  return (
    <Grid item lg={2} md={3} sm={6} xs={12} className={classes.root}>
      <div 
        className={classes.linkContainer} 
        style={{backgroundImage: `url(${imageUrl})`}}
        >
        <Link to={`/posts/${id}`} className={classes.link}></Link>
      </div>
      <div className={classes.itemInfo}>
        <p className={classes.name}>{`${title}`}</p>
        <p className={classes.price}>{price.includes("$") ? price : `$${price}`}</p>
      </div>
    </Grid>
  );
};

export default ItemLink;