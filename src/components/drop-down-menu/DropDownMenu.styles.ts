import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      fontSize: '16px',
      padding: '5px',
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  }),
);