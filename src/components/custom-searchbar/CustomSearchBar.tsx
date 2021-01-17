import React from 'react';
import { useStyles } from './CustomSearchBar.styles';
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';

const CustomSearchBar:React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input className={`${classes.searchInput} ${classes.searchBar}`} type='text' placeholder='Search For...'></input>
      <div className={classes.divider}></div>
      <input className={classes.searchInput} type='text' placeholder='Location'></input>
      <IconButton className={`${classes.filterButton}`}><TuneIcon/></IconButton>
      <button className={classes.searchButton}><SearchIcon/>Search</button>
    </div>
  )
}
export default CustomSearchBar;