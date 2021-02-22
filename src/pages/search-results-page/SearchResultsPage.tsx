import React, { useEffect } from "react";
// Components:
import Navbar from "../../containers/navbar/Navbar";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";
// Redux:
import { useSelector } from "react-redux";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
interface Props {
  searchQuery: string
}

const SearchResultsPage: React.FC<Props> = ({searchQuery}) => {
  const [search, location] = searchQuery.split('&');
  const posts = useSelector<RootStore, postState['searchQueryPosts']>(state => state.post.searchQueryPosts);

  return (
    <div>
      <Navbar />
      <div>
        <ReusableHeader text={`Search Results: ${search} in ${location.length > 0 ? location : 'US' }`} fontSize='38px' />
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