import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  header2: {
    color: 'black',
    fontSize: '1.6em',
    marginRight: '1em',
    [sizes.down('sm')]: {
      marginTop: '0px'
    }
  },
});