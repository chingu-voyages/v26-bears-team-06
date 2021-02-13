import React, {useEffect} from "react";
import "./App.css";
// Pages
import Homepage from "./pages/homepage/homepage";
import CreatePostPage from "./pages/create-post-page/CreatePostPage";
import CategoryResultsPage from "./pages/search-results-page/CategoryResultsPage";
import SubCategoryResultsPage from './pages/search-results-page/SubCategoryResultsPage';
import PostPage from "./pages/post-page/PostPage";
import UserProfile from "./pages/user-profile-page/UserProfile";
// Components:
import CustomSnackbar from "./components/snackbar-feedback/Snackbar";
// React Router:
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Seed Data:
import { Category, seedCategories, seedPosts, User } from "./seed/seedData";
// Redux State Management:
import { getCategories } from "./redux/category/categoryActions";
import { categoryState } from "./redux/category/categoryReducer";
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from "./redux/store";
import { getAllUsers } from "./redux/user/userActions";
import { getAllPosts } from "./redux/post/postActions";
import { userState } from "./redux/user/userReducer";
import { postState } from "./redux/post/postReducer";


function App() {
  const dispatch = useDispatch();
  // Grabbing pieces of our state:
  const users = useSelector<RootStore, userState["users"]>(state => state.user.users);
  console.log('USERS:', users);
  const posts = useSelector<RootStore, postState["posts"]>(state => state.post.posts);
  console.log('POSTS:', posts);

  // Making get requests to database to initialize state:
  useEffect(() => {
   
  }, []);

  const findCategory = (id: string) => {
    const foundCategory = seedCategories.find(function(category){
      return category.id === id;
    });

    if(foundCategory){
      return foundCategory
    } else {
      return {
        name: "Sorry nothing was found",
        id: '',
        imageURL: '',
        subCategories: [],
      }
    }
  };

  const findSubCategory = (category: Category, id: string) => {
    const foundSubCategory = category.subCategories.find(function(subCategory){
      return subCategory.id === id;
    });

    if(foundSubCategory) {
      return foundSubCategory
    } else {
      return {
        name: 'Sorry nothing was found',
        id: '',
        posts: [],
      }
    }
  };

  const findPost = (id: string) => {
    const foundPost = seedPosts.find(function(post){
      return post.id === id;
    });

    if(foundPost) {
      return foundPost
    } else {
      return {
        name: 'Sorry this post was not found',
        id: '',
        price: '',
        location: '',
        category: '',
        subCategory: '',
        description: '',
        imageUrl: '',
        author: {} as User
      }
    }
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/posts/new" component={CreatePostPage} />
          <Route 
              exact 
              path='/posts/:postId' 
              render={({match}) => 
              <PostPage 
                post={findPost(match.params.postId)}
              />
            }
              />
          <Route 
            exact path="/:categoryId/"
            render={(routeProps) => 
              <CategoryResultsPage category={findCategory(routeProps.match.params.categoryId)}/>
            } 
          />
          <Route 
            exact path="/:categoryId/:subCategoryId"
            render={(routeProps) => 
              <SubCategoryResultsPage subCategory={findSubCategory(findCategory(routeProps.match.params.categoryId), routeProps.match.params.subCategoryId)}/>
            } 
            />
        </Switch>
      </Router>
      <CustomSnackbar />
    </div>
  );
}

export default App;