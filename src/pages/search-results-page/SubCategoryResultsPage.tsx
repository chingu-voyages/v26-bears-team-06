import React from "react";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import Navbar from "../../containers/navbar/Navbar";
import PostListContainer from "../../containers/post-list/PostListContainer";
import { Subcategory } from "../../seed/seedData";
import { useStyles } from "./CategoryResultsPage.styles";

interface Props {
  subCategory: Subcategory,
}

const SubCategoryResultsPage: React.FC<Props> = ({ subCategory }) => {
  const classes = useStyles();
  const { name, posts } = subCategory;

  return (
    <div>
      <Navbar />
      <ReusableHeader text={name} fontSize="38px" />
      {posts.length === 0 ? 
        <h1>Coming Soon!</h1>
        :
        <div className={classes.header}>
          <PostListContainer
            posts={posts}
            header=''
            seeAllLink=''
          />
        </div>
      }
    </div>
  );
};

export default SubCategoryResultsPage;