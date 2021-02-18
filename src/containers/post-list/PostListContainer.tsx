import React from 'react';
// Components
import ItemLink from '../../components/item-link/ItemLink';
import ReusableHeader from '../../components/reusable-header/ReusableHeader';
// Material UI: 
import { Grid } from '@material-ui/core';
import { useStyles } from './PostListContainer.styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// React Router:
import { Link } from 'react-router-dom';
import { Post } from '../../redux/post/postTypes';
// Redux;
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { postState } from '../../redux/post/postReducer';

interface Props {
  header: string,
  posts: Post[],
  seeAllLink: string,
  isCategory?: boolean
}

const ItemListContainer:React.FC<Props> = ({header, posts, seeAllLink, isCategory}) => {
  const classes = useStyles();
  const isLoading = useSelector<RootStore, postState['loading']>(state => state.post.loading);
  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <ReusableHeader text={header} fontSize="22px"/>
        { seeAllLink.length > 0 &&
          <Link to={seeAllLink} className={classes.link}>See all...</Link>
        }
      </div>
      {isLoading ? 
      <CircularProgress />
      :
      <Grid 
        container 
        spacing={3} 
        className={classes.root} 
        style={isCategory ? {overflow: 'visible'} : {overflow: 'hidden'}}>
        { seeAllLink.length > 0 ?
          posts.slice(0, 6).map(post => (
            <ItemLink 
              imageUrl={post.image_url} 
              title={post.title} 
              price={post.price}
              key={post.post_id} 
              id={`${post.post_id}`}
            />
          )) : 
          posts.map(post => (
            <ItemLink 
              imageUrl={post.image_url} 
              title={post.title} 
              price={post.price}
              key={post.post_id} 
              id={`${post.post_id}`}
            />
          ))
        }
      </Grid>
      }
    </div>
  );
};

export default ItemListContainer;