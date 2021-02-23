import { makeStyles } from '@material-ui/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [sizes.down('sm')]: {
      flexDirection: 'column'
    }
  },
  userInfo: {
    width: '20%',
    [sizes.down('sm')]: {
      width: '100%'
    }
  },
  postContainer : {
    width: '75%',
    [sizes.down('sm')]: {
      width: '100%'
    }
  },
  showPostsBtn: {
    marginTop: '20px'
  }
})