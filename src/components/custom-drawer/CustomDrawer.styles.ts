import { makeStyles } from '@material-ui/core';

const drawerWidth = 340;

export const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  filterCategories: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    width: '80%',
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '80%',
    border: 'none',
    fontSize: '18px',
    borderRadius: '35px',
    backgroundColor: 'rgba(213, 216, 216, 1)',
    outline: 'none',
    marginTop: '2rem',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:active': {
      transform: 'scale(0.975)'
    }
  },  
}));