import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '250px',
    border: 'none',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.85',
    zIndex: 0,
    filter: 'brightness(90%)',
    transition: 'all 0.3s ease',

    '&:hover': {
      opacity: '1',
      filter: 'brightness(100%)',
    },
    [sizes.down('md')]: {
      height: '100px'
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '50px',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    fontSize: '3.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',


  },
});