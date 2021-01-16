import React from 'react';
import { Category } from '../../seed/seedData';

interface Props {
  categories: Category[]
}

const Navbar:React.FC<Props> = ({categories}) => {
  return (
    <div>
      {categories.map(category => (
        <li key={category.id}>{category.name}</li>
      ))}
    </div>
  )
};

export default Navbar;