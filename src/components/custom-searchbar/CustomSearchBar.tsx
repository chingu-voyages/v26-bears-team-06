import React, { useState } from 'react';
// Material UI Components:
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
// React Router:
import { withRouter, RouteComponentProps } from 'react-router-dom';
// Styles:
import { useStyles } from './CustomSearchBar.styles';
// Redux: 
import { useDispatch, useSelector } from 'react-redux';
import { GetSearchQueryPostsSuccess } from '../../redux/post/postActions';
import { RootStore } from '../../redux/store';
import { drawerState } from '../../redux/drawer/drawerReducer';
import { CLOSE_DRAWER } from '../../redux/drawer/drawerTypes';
// Prop interface (types):
interface Props {
  handleOpen: () => void,
}

const CustomSearchBar:React.FC<Props & RouteComponentProps> = ({ handleOpen, history }) => {
  const dispatch = useDispatch();
  const subcatSearchQuery = useSelector<RootStore, drawerState["searchQueryString"]>(state => state.drawer.searchQueryString);
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(GetSearchQueryPostsSuccess(searchQuery, location, subcatSearchQuery));
    history.push(`/search/${searchQuery}&${location}&${subcatSearchQuery}`);
    dispatch({type: CLOSE_DRAWER});
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
        <input 
          className={`${classes.searchInput} ${classes.searchBar}`} 
          type='text' 
          placeholder='Search For...'
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
        <div className={classes.divider}></div>
        <input 
          className={classes.searchInput} 
          type='text' 
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
          placeholder='Location'
         />
        <IconButton 
          className={`${classes.filterButton}`}
          onClick={handleOpen}
          >
            <TuneIcon/>
        </IconButton>
          <button className={classes.searchButton} type='submit'><SearchIcon/>Search</button>
    </form>
  )
}
export default withRouter(CustomSearchBar);