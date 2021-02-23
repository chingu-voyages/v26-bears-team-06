import React, { useState } from 'react';
import { useStyles } from './UserProfile.styles';
import { useDispatch, useSelector } from 'react-redux';
import EditUserInfo from '../../components/edit-user-info/EditUserInfo';
import Navbar from '../../containers/navbar/Navbar';
import { GetUsersPostsSuccess } from '../../redux/post/postActions';
import { postState } from '../../redux/post/postReducer';
import { RootStore } from '../../redux/store';
import { userState } from '../../redux/user/userReducer';
import ItemListContainer from '../../containers/post-list/PostListContainer';
import { Button } from '@material-ui/core';

const UserProfile = () => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector<RootStore, userState["token"]>(state => state.user.token);
  const currentUser = useSelector<RootStore, userState["currentUser"]>(state => state.user.currentUser);
  
  const userPosts = useSelector<RootStore, postState["userPosts"]>(state => state.post.userPosts);

  const classes = useStyles();

  const handleClick = () => {
    dispatch(GetUsersPostsSuccess(currentUser.user_id, token));
    setHidden(!hidden);
  }

  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.userInfo}>
          <h1>Hi, {currentUser?.name}</h1>
          <h2>User Info:</h2>
          <p>Name: {currentUser?.name}</p>
          <p>Email: {currentUser?.email}</p>
          <p>City: {capitalize(currentUser?.city)}</p>
          <p>State: {capitalize(currentUser?.state)}</p>
          <p>Zip: {currentUser?.zip}</p>
          <EditUserInfo />
        </div>
        <div className={classes.postContainer}>
          <Button variant='contained' onClick={handleClick} className={classes.showPostsBtn}>{hidden ? 'Show' : 'Hide'} Your Posts</Button>
          <div hidden={hidden} >
            <ItemListContainer posts={userPosts} header='Your Posts' seeAllLink='' isCategory /> 
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;