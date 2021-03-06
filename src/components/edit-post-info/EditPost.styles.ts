import { makeStyles } from '@material-ui/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent:'center',
    width: 'fit-content',
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogContentText: {
    padding: '1em 2em 0 2em'
  },
  dialogForms: {
    display: 'flex',
    justifyContent: 'center',
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  input: {
    width: '480px',
    marginBottom: '0.5em',
    [sizes.down('sm')]: {
      width: '100%'
    }
  }
});