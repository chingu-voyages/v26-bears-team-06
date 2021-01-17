import React from 'react';
import { Link } from 'react-router-dom';

const ItemLink = ({ item }) => {
  return <Link>{item}</Link>;
};

export default ItemLink;
