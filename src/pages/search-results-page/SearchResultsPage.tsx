import React, { useEffect } from "react";
// Components:
import Navbar from "../../containers/navbar/Navbar";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";
// Redux:
import { useDispatch, useSelector } from "react-redux";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
import { GetSearchQueryPostsSuccess } from "../../redux/post/postActions";
interface Props {
  searchQuery: string,
};

const SearchResultsPage: React.FC<Props> = ({searchQuery}) => {
  const dispatch = useDispatch();
  const posts = useSelector<RootStore, postState['searchQueryPosts']>(state => state.post.searchQueryPosts);

  useEffect(() => {
    dispatch(GetSearchQueryPostsSuccess(searchQuery));
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div>
        <ReusableHeader text={`Search Results: ${searchQuery}`} fontSize='38px' />
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

export default SearchResultsPage;