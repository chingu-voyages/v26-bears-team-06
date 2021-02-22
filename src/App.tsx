import React, {useEffect} from "react";
import "./App.css";
// Pages
import Homepage from "./pages/homepage/homepage";
import CreatePostPage from "./pages/create-post-page/CreatePostPage";
import CategoryResultsPage from "./pages/search-results-page/CategoryResultsPage";
import SearchResultsPage from './pages/search-results-page/SearchResultsPage';
import PostPage from "./pages/post-page/PostPage";
import UserProfile from "./pages/user-profile-page/UserProfile";
// Components:
import CustomSnackbar from "./components/snackbar-feedback/Snackbar";
// React Router:
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux State Management:
import { useDispatch } from 'react-redux';
import { GetAllPostsSuccess } from "./redux/post/postActions";
import SubCategoryResultsPage from "./pages/search-results-page/SubCategoryResultsPage";

function App() {
  const dispatch = useDispatch();

  // Making get requests to database to initialize state:
  useEffect(() => {
    dispatch(GetAllPostsSuccess());
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Homepage  />} />
          <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/posts/new" component={CreatePostPage} />
          <Route 
              exact 
              path='/posts/:postId' 
              render={({match, history}) => 
              <PostPage 
                match={match}
                history={history}
              />
            }
              />
          <Route 
            exact path="/search/:searchQuery"
            render={({match}) => 
              <SearchResultsPage searchQuery={match.params.searchQuery} />
            } 
          />
          <Route 
            exact path="/:categoryId/"
            render={({match}) => 
              <CategoryResultsPage category={match.params.categoryId} match={match} />
            } 
          />
          <Route 
            exact path="/:categoryId/:subcatId"
            render={({match}) => 
              <SubCategoryResultsPage subcatId={parseInt(match.params.subcatId)} />
            } 
          />
        </Switch>
      </Router>
      <CustomSnackbar />
    </div>
  );
}

export default App;