import React from 'react';
// Components:
import CustomSearchBar from '../../components/custom-searchbar/CustomSearchBar';
import CustomDrawer from '../../components/custom-drawer/CustomDrawer';
import CreatePostingButton from '../../components/create-posting-button/CreatePostingButton';
// Styles:
import { useStyles } from './Navbar.styles';
// Seed Data: 
import { Category } from '../../seed/seedData';
// State Management (REDUX):
import { useSelector, useDispatch } from 'react-redux';
import { drawerState } from '../../redux/drawer/drawerReducer';
import DropDownMenu from '../../components/drop-down-menu/DropDownMenu';
import SignInSignUp from '../../components/signin-signup/SignInSignUp';
interface Props {
  categories: Category[]
};

const Navbar:React.FC<Props> = ({categories}) => {
  // Using Redux hooks to dispatch actions to open/close drawer and pulldown menus.
  const drawerOpen = useSelector<any, drawerState['open']>((state) => state.drawer.open);
  const dispatch = useDispatch();
  // Functions for drawer state (Refactor to useState hooks, redux is overkill for this)
  const handleDrawerOpen = () => {
    dispatch({type: "OPEN"});
  };

  const handleDrawerClose = () => {
    dispatch({type: "CLOSE"});
  };
 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topRow}>
        <div className={classes.rightSide}>
          <div className={classes.logo}></div>
          <CustomSearchBar handleOpen={handleDrawerOpen}/>
        </div>
        <div className={classes.leftSide}>
          <div className={classes.authLinksContainer}>
            <SignInSignUp />
          </div>
          <CreatePostingButton />
        </div>
      </div>
      <div className={classes.bottomRow}>
        <ul className={classes.categoriesDropDownList}>
          {categories.map(category => (
              <DropDownMenu category={category} />
          ))}
        </ul>
      </div>
      <CustomDrawer 
        open={drawerOpen}
        handleClose={handleDrawerClose}
        />
    </div>

  )
};

export default Navbar;