import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import sizes from '../../styles/constants/MediaQueries';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
      fontFamily: 'Varela Round',

    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      fontSize: '16px',
      padding: '5px',
      fontFamily: 'Varela Round',

      [sizes.down('lg')]: {
        marginRight: theme.spacing(3),
      },
      [sizes.down('sm')]: {
        fontSize: '13px',
        marginBottom: theme.spacing(0),
        padding: '1px'
      }
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  }),
);