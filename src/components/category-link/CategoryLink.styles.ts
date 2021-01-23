import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    height: '100%',
    border: 'none',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    width: '100%',
    height: '100%',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    width: '100%',
    lineHeight: '100%',
    fontSize: '2.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000',
  },
});