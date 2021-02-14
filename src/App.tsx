import React, {useEffect} from "react";
import "./App.css";
// Pages
import Homepage from "./pages/homepage/homepage";
import CreatePostPage from "./pages/create-post-page/CreatePostPage";
import CategoryResultsPage from "./pages/search-results-page/CategoryResultsPage";
import PostPage from "./pages/post-page/PostPage";
import UserProfile from "./pages/user-profile-page/UserProfile";
// Components:
import CustomSnackbar from "./components/snackbar-feedback/Snackbar";
// React Router:
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Seed Data:
import { Category, seedCategories, seedPosts, User } from "./seed/seedData";
// Redux State Management:
import { useDispatch } from 'react-redux';
import { getAllUsers } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();

  // Making get requests to database to initialize state:
  useEffect(() => {
    dispatch(getAllUsers());
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

  const findPost = (id: number | undefined) => {
    const foundPost = seedPosts.find(function(post){
      return post.post_id === id;
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
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/posts/new" component={CreatePostPage} />
          <Route 
              exact 
              path='/posts/:postId' 
              render={({match}) => 
              <PostPage 
                match={match}
              />
            }
              />
          <Route 
            exact path="/:categoryId/"
            render={({match}) => 
              <CategoryResultsPage category={match.params.categoryId} match={match} />
            } 
          />
        </Switch>
      </Router>
      <CustomSnackbar />
    </div>
  );
}

export default App;