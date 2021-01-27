import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  section: {
    marginBottom: '4em',
    marginTop: '1em'
  },
  root: {
    flexGrow: 1,
    height: '240px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '10%',
    width: '100%',
    marginBottom: '.5em'
  }
});