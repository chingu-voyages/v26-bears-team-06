import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '75%',
    backgroundColor: '#EBEEEE',
    borderRadius: '35px',
    height: '40px',
  },
  searchInput: {
    height: '80%',
    width: '100%',
    backgroundColor: '#EBEEEE',
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    paddingLeft: '10px',
  },
  divider: {
    border: '1px rgba(213, 216, 216, 1) solid',
    backgroundColor: 'rgba(213, 216, 216, 1)',
    width: '0%',
    height: '55%'
  },
  searchBar: {
    borderRadius: '35px 0 0 35px',
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
  },
})