import React from "react";
import Navbar from "../../containers/navbar/Navbar";
import { useStyles } from "./CategoryResultsPage.styles";
import { useDispatch, useSelector } from "react-redux";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";
interface Props {
  category: string,
  match: any
};

const CategoryResultsPage: React.FC<Props> = ({category, match}) => {
  const posts = useSelector<RootStore, postState['posts']>(state => state.post.posts);

  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <ReusableHeader text={`All ${capitalize(category)}`} fontSize='38px' />
      <PostListContainer
            posts={posts}
            header=''
            seeAllLink=''
            isCategory
          />
    </div>
  );
};

export default CategoryResultsPage;