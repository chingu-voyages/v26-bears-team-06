import React from 'react';
import ItemLink from '../../components/item-link/ItemLink';
import { Grid } from '@material-ui/core';
import { useStyles } from './PostListContainer.styles';
import ReusableHeader from '../../components/reusable-header/ReusableHeader';
import { Link } from 'react-router-dom';
import { Post } from '../../seed/seedData';
import sizes from '../../styles/constants/MediaQueries';
interface Props {
  header: string,
  posts: Post[],
  seeAllLink: string,
}

const ItemListContainer:React.FC<Props> = ({header, posts, seeAllLink}) => {

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <ReusableHeader text={header} fontSize="22px"/>
        { seeAllLink.length > 0 &&
          <Link to={seeAllLink} className={classes.link}>See all...</Link>
        }
      </div>
      <Grid 
        container 
        spacing={3} 
        className={classes.root} 
        style={seeAllLink.length > 0 ? {overflow: 'hidden'} : {}}>
        { seeAllLink.length > 0 ?
          posts.slice(0, 6).map(post => (
            <ItemLink 
              imageUrl={post.imageUrl} 
              name={post.name} 
              price={post.price}
              key={post.id} 
            />
          )) : 
          posts.map(post => (
            <ItemLink 
              imageUrl={post.imageUrl} 
              name={post.name} 
              price={post.price}
              key={post.id} 
            />
          ))
        }
      </Grid>
    </div>
  );
};

export default ItemListContainer;