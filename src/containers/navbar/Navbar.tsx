import React from 'react';
import CustomSearchBar from '../../components/custom-searchbar/CustomSearchBar';
import CustomDrawer from '../../components/custom-drawer/CustomDrawer';
import { Category } from '../../seed/seedData';
import { useStyles } from './Navbar.styles';
import CreatePostingButton from '../../components/create-posting-button/CreatePostingButton';

interface Props {
  categories: Category[]
}

const Navbar:React.FC<Props> = ({categories}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topRow}>
        <div className={classes.rightSide}>
          <span className={classes.logo}>Craigs2ndList</span>
          <CustomSearchBar />
        </div>
        <div className={classes.leftSide}>
          <div className={classes.authLinksContainer}>
            <a className={classes.authLink} href='/'>Login</a>
            <span>/</span>
            <a className={classes.authLink} href='/'>Sign Up</a>
          </div>
          <CreatePostingButton />
        </div>
      </div>
      <div className={classes.bottomRow}>
        <ul className={classes.categoriesDropDownList}>
          {categories.map(({name, id}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <CustomDrawer />
    </div>

  )
};

export default Navbar;