import React, {useEffect} from "react";
import Homepage from "./pages/homepage/homepage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePostPage from "./pages/create-post-page/CreatePostPage";
import CategoryResultsPage from "./pages/search-results-page/CategoryResultsPage";
import SubCategoryResultsPage from './pages/search-results-page/SubCategoryResultsPage';
import { Category, seedCategories, seedPosts } from "./seed/seedData";
import PostPage from "./pages/post-page/PostPage";
import { getCategories } from "./redux/category/categoryActions";
import { categoryState } from "./redux/category/categoryReducer";
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from "./redux/store";
import { getAllUsers } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector<RootStore, categoryState["categories"]>(state => state.category.categories);
  console.log('CATEGORIES:', categories);

  useEffect(() => {
    dispatch(getCategories());
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
      }
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
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
  );
}

export default App;