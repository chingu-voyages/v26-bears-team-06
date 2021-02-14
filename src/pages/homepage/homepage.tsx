import React from 'react';
// Containers:
import Navbar from '../../containers/navbar/Navbar';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';
// Seed Data:

const Homepage: React.FC = () => {
  
  return (
    <div>
      <Navbar />
      <CategoryListContainer />
    </div>
  )
}

export default Homepage