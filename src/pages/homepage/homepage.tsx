import React from 'react';
// Containers:
import Navbar from '../../containers/navbar/Navbar';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';
// State:
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { postState } from '../../redux/post/postReducer';

const Homepage: React.FC= () => {
  const posts = useSelector<RootStore, postState['posts']>(state => state.post.posts);
  
  return (
    <div>
      <Navbar />
      <CategoryListContainer />
      <PostListContainer posts={posts} header='Recently Uploaded' seeAllLink='' />
    </div>
  )
}

export default Homepage