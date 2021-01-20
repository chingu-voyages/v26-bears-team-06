import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    border: '1px solid #757373',
    backgroundSize: 'cover',
  },
  linkContainer: {
    width: '100%',
    height: '100%',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    lineHeight: '100%',
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#000',
  },
});