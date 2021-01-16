import React from 'react';
import Navbar from '../../containers/navbar/Navbar';
import { seedCategories } from '../../seed/seedData';


const Homepage = () => {
  return (
    <div>
      <Navbar categories={seedCategories}/>
      <h1>HomePage</h1>
    </div>
  )
}

export default Homepage