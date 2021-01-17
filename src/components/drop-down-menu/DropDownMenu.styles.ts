import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      fontSize: '16px',
      fontWeight: 'bold',
    }
  }),
);