import React from 'react';
import CustomSearchBar from '../../components/custom-searchbar/CustomSearchBar';
import { Category } from '../../seed/seedData';
import { useStyles } from './Navbar.styles';

interface Props {
  categories: Category[]
}

const Navbar:React.FC<Props> = ({categories}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topRow}>
        <div className={classes.rightSide}>
          <span className={classes.logo}>Logo</span>
          <CustomSearchBar />
        </div>
        <div className={classes.leftSide}>
          <div>
            <a href='/'>Login</a>
            <span>/</span>
            <a href='/'>Sign Up</a>
          </div>
          <button>Create Posting</button>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <ul className={classes.categoriesDropDownList}>
          {categories.map(({name, id}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>

  )
};

export default Navbar;