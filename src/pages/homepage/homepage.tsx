import React from 'react';
import HeroImage from '../../containers/hero-image/HeroImage';
import Navbar from '../../containers/navbar/Navbar';
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