import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  linkContainer: {
    backgroundSize: 'cover',
    height: '100%',
    marginBottom: '1em',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: '0.875em',
    padding: 0,
    margin: '0 0 8px 0',
  },
  price: {
    fontSize: '1em',
    padding: 0,
    margin: 0,
  },
});