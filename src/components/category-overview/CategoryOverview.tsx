import React from 'react';
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";

interface Props {
  category: string
}

const CategoryOverview: React.FC<Props> = ({category}) => {
  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <div>
      <h1>{capitalize(category)}</h1>
      
    </div>
  )
};

export default CategoryOverview;