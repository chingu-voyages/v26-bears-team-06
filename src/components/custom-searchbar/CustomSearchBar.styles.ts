import { makeStyles } from "@material-ui/core";
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    backgroundColor: '#EBEEEE',
    borderRadius: '35px',
    height: '40px',

    [sizes.down('lg')]: {
      width: '80%',
    },
    [sizes.down('md')]: {
      width: '90%',
    },
  },
  searchInput: {
    height: '80%',
    width: '90%',
    backgroundColor: '#EBEEEE',
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    paddingLeft: '10px',
    [sizes.down('sm')]: {
      fontSize: '12px',
    }
  },
  divider: {
    border: '1px rgba(213, 216, 216, 1) solid',
    backgroundColor: 'rgba(213, 216, 216, 1)',
    width: '0%',
    height: '55%'
  },
  searchBar: {
    borderRadius: '35px 0 0 35px',
    width: '100%',
    [sizes.down('sm')]: {
      fontSize: '12px',
      
    }
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    border: 'none',
    fontSize: '18px',
    borderRadius: '35px',
    backgroundColor: 'rgba(213, 216, 216, 1)',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:active': {
      transform: 'scale(0.975)'
    },
    [sizes.down('sm')]: {
      fontSize: '12px'
    }
  },
  filterButton: {
    height: '83.3%',
    border: 'none',
    padding: '0 10px',
    backgroundColor: '#EBEEEE',
    color: '#666868',
    outline: 'none',
    borderRadius: '100%',
    opacity: '0.85',
    transition: 'all 0.3s ease',
    '&:hover': {
      cursor: 'pointer',
      opacity: '1',
      color: 'black',
    },
    [sizes.down('sm')]: {
      fontSize: '12px'
    }
  },
  searchLink: {
    textDecoration: 'none',
    color: '#666868',
    display: 'flex',
    alignItems: 'center'
  }
})