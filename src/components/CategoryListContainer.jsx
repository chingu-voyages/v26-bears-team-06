import React from 'react';
import Headline2 from './Headline2';
import CategoryLink from './CategoryLink';

const CategoryListContainer = () => {
  return (
    <div>
      <Headline2 headline="San Francisco, CA" />
      <div>
        <CategoryLink category="community" />
        <CategoryLink category="community" />
        <CategoryLink category="community" />
      </div>
    </div>
  );
};

export default CategoryListContainer;
