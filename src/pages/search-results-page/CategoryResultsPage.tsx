import React from "react";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import Navbar from "../../containers/navbar/Navbar";
import PostListContainer from "../../containers/post-list/PostListContainer";
import { Category, Subcategory } from "../../seed/seedData";
import { useStyles } from "./CategoryResultsPage.styles";

interface Props {
  category: Category,
}

const CategoryResultsPage: React.FC<Props> = ({ category }) => {
  const classes = useStyles();
  const { name, subCategories } = category;

  return (
    <div>
      <Navbar />
      <ReusableHeader text={name} fontSize="38px" />
      {subCategories.map((subCategory: Subcategory) => (
        <div className={classes.header}>
          <PostListContainer
            posts={subCategory.posts}
            header={subCategory.name}
            seeAllLink={`/${category.id}/${subCategory.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryResultsPage;
