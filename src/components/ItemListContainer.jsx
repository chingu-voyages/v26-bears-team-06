import React from 'react';
import Headline2 from './Headline2';
import ItemLink from './ItemLink';

const ItemListContainer = () => {
  return (
    <div>
      <Headline2 headline="Recently posted in your area" />
      <div>
        <ItemLink item="item" />
        <ItemLink item="item" />
        <ItemLink item="item" />
        <ItemLink item="item" />
        <ItemLink item="item" />
        <ItemLink item="item" />
        <ItemLink item="item" />
      </div>
    </div>
  );
};

export default ItemListContainer;
