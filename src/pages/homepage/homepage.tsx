
import React from 'react';
// Containers:
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';

const Homepage:React.FC = () => {
  return (
    <div>
      <CategoryListContainer />
      <PostListContainer />
    </div>
  )
}

export default Homepage