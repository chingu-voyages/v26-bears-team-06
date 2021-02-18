import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import Navbar from "../../containers/navbar/Navbar";
import PostListContainer from "../../containers/post-list/PostListContainer";
import { GetSubcatPostsSuccess } from "../../redux/post/postActions";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
import { seedCategories } from "../../seed/seedData";
import { useStyles } from "./CategoryResultsPage.styles";

interface Props {
  subcatId: number
}

const SubCategoryResultsPage: React.FC<Props> = ({ subcatId }) => {
  const dispatch = useDispatch();
  const name = seedCategories[0].subCategories[subcatId - 1] === undefined ? 'Coming Soon!' : seedCategories[0].subCategories[subcatId - 1].name;
  const posts = useSelector<RootStore, postState['subcatPosts']>(state => state.post.subcatPosts);
  const classes = useStyles();
  console.log(subcatId, posts);

  useEffect(() => {
    dispatch(GetSubcatPostsSuccess(subcatId));
  }, [subcatId]);

  return (
    <div>
      <Navbar />
      <ReusableHeader text={name} fontSize="38px" />
        <div className={classes.header}>
          <PostListContainer
            posts={posts}
            header=''
            seeAllLink=''
            isCategory
          />
        </div>
    </div>
  );
};

export default SubCategoryResultsPage;