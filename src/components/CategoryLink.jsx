import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ category }) => {
  return <Link>{category}</Link>;
};

export default CategoryLink;
