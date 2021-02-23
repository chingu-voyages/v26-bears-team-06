import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  section: {
    marginBottom: '2em',
    marginTop: '1em',
  },
  root: {
    flexGrow: 1,
    height: '240px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: '10%',
    width: '100%',
    marginBottom: '2em'
  },
  link: {
    color: '#38b6ff',
    textDecoration: 'none',
    width: '90px',
    paddingBottom: '1px',
    fontSize: '18px',
    [sizes.down('sm')]: {
      fontSize: '15px',
    }
  }
});