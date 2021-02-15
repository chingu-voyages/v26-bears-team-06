import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    marginBottom: '1.5em',
    paddingBottom: '40px !important'
  },
  linkContainer: {
    backgroundSize: 'cover',
    height: '100%',
    marginBottom: '1em',
    borderRadius: '10px',
    transition: 'all 0.3s ease',

    '&:hover': {
      transform: 'scale(1.025)'
    }
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: '1.25em',
    padding: 0,
    margin: '0 0 8px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '24px',
    whiteSpace: 'nowrap',
  },
  price: {
    fontSize: '1em',
    padding: 0,
    margin: 0,
  }, 
  itemInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});