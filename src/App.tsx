import React from "react";
import Homepage from "./pages/homepage/homepage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePostPage from "./pages/create-post-page/CreatePostPage";
import CategoryResultsPage from "./pages/search-results-page/CategoryResultsPage";
import SubCategoryResultsPage from './pages/search-results-page/SubCategoryResultsPage';
import { Category, seedCategories } from "./seed/seedData";

function App() {
  
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
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/posts/new" component={CreatePostPage} />
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
