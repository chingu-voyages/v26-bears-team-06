import React from "react";
import Navbar from "../../containers/navbar/Navbar";
import { Category, Subcategory } from "../../seed/seedData";
import { useStyles } from "./CategoryResultsPage.styles";
import { Switch, Route } from 'react-router-dom';
import CategoryOverview from '../../components/category-overview/CategoryOverview';
interface Props {
  category: string,
  match: any
};

const CategoryResultsPage: React.FC<Props> = ({category, match}) => {
  const classes = useStyles()

  console.log(match);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={`${match.path}`} component={CategoryOverview}/>
      </Switch>
    </div>
  );
};

export default CategoryResultsPage;