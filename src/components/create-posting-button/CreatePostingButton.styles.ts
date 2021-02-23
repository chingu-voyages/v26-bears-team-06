import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  button: {
    padding: '5px 8px',
    [sizes.down('sm')]: {
      marginLeft: '85px'
    }
  }
});