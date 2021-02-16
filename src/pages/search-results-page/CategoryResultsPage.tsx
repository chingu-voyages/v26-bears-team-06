import React from "react";
// Components:
import Navbar from "../../containers/navbar/Navbar";
import ReusableHeader from "../../components/reusable-header/ReusableHeader";
import PostListContainer from "../../containers/post-list/PostListContainer";
// Redux:
import { useSelector } from "react-redux";
import { postState } from "../../redux/post/postReducer";
import { RootStore } from "../../redux/store";
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

  return (
    <div>
      <Navbar />
      {category === 'goods' ?
      <div>
        <ReusableHeader text={`All ${capitalize(category)}`} fontSize='38px' />
        <PostListContainer
              posts={posts}
              header=''
              seeAllLink=''
              isCategory
            />
      </div>
      :
      <div>
        <ReusableHeader text={`${capitalize(category)}`} fontSize='38px' />
        <h1>Coming Soon!</h1>
      </div>
      }
    </div>
  );
};

export default CategoryResultsPage;