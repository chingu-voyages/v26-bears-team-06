import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  section: {
    margin: '4em 0',
  },
  root: {
    flexGrow: 1,
    height: '320px',    
    display: 'flex',
    justifyContent: 'center',
  },
});
