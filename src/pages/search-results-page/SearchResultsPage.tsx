import React, { useEffect } from "react";
import Navbar from "../../containers/navbar/Navbar";
import { useStyles } from "./CategoryResultsPage.styles";
import { useDispatch, useSelector } from "react-redux";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";
import { getSearchQueryPosts } from "../../redux/post/postActions";

interface Props {
  searchQuery: string,
  
};

const SearchResultsPage: React.FC<Props> = ({searchQuery}) => {
  const dispatch = useDispatch();
  const posts = useSelector<RootStore, postState['searchQueryPosts']>(state => state.post.searchQueryPosts);

  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  };


  useEffect(() => {
    dispatch(getSearchQueryPosts(searchQuery));
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