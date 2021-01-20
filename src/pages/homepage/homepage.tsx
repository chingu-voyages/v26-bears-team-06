import React from 'react';
// Containers:
import HeroImage from '../../containers/hero-image/HeroImage';
import Navbar from '../../containers/navbar/Navbar';
import CategoryListContainer from '../../containers/category-list/CategoryListContainer';
import PostListContainer from '../../containers/post-list/PostListContainer';
// Seed Data:
import { seedCategories } from '../../seed/seedData';

const Homepage = () => {
  return (
    <div>
      <Navbar categories={seedCategories}/>
      <HeroImage />
      <CategoryListContainer />
      <PostListContainer />
    </div>
  )
}

export default Homepage