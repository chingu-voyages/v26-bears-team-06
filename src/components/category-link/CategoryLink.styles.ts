import { makeStyles } from '@material-ui/core/styles';

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
    zIndex: 0
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    fontSize: '3.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
  },
});