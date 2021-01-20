import React from 'react';
// Containers:
import Navbar from '../../containers/navbar/Navbar';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';
// Seed Data:
import { seedCategories } from '../../seed/seedData';

const Homepage = () => {
  return (
    <div>
      <Navbar categories={seedCategories}/>
      <CategoryListContainer />
      <PostListContainer />
    </div>
  )
}

export default Homepage