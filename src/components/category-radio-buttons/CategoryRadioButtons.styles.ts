import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '.25em',
    marginLeft: '0',
    width: '100%',
    [sizes.down('sm')]: {
      flexDirection: 'column',
    }
  },
  header: {
    margin: '0.5em',
    marginLeft: '0',
  }
});