import React from 'react';
// Containers:
import Navbar from '../../containers/navbar/Navbar';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';
// Seed Data:
import { seedPosts } from '../../seed/seedData';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <CategoryListContainer />
      <PostListContainer 
        posts={seedPosts} 
        header="Recently Uploaded"
        seeAllLink="/1" />
    </div>
  )
}

export default Homepage