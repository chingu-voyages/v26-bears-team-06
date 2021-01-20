import React from 'react';
// Containers:
import HeroImage from '../../containers/hero-image/HeroImage';
import Navbar from '../../containers/navbar/Navbar';
// Seed Data:
import { seedCategories } from '../../seed/seedData';

const Homepage = () => {
  return (
    <div>
      <Navbar categories={seedCategories}/>
      <HeroImage />
    </div>
  )
}

export default Homepage