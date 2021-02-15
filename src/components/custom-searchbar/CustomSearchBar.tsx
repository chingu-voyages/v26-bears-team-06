import React, { useState } from 'react';
// Material UI Components:
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
// React Router:
import { Link } from 'react-router-dom'
// Styles:
import { useStyles } from './CustomSearchBar.styles';
// Prop interface (types):
interface Props {
  handleOpen: () => void,
}

const CustomSearchBar:React.FC<Props> = ({ handleOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <input 
        className={`${classes.searchInput} ${classes.searchBar}`} 
        type='text' 
        placeholder='Search For...'
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
      <div className={classes.divider}></div>
      {/* <input 
        className={classes.searchInput} 
        type='text' 
        placeholder='Location'
        disabled /> */}
      <IconButton 
        className={`${classes.filterButton}`}
        onClick={handleOpen}
        disabled
        >
          <TuneIcon/>
        </IconButton>
      <button className={classes.searchButton}><Link to={`/search/${searchQuery}`} className={classes.searchLink}><SearchIcon/>Search</Link></button>
    </div>
  )
}
export default CustomSearchBar;