import { makeStyles } from "@material-ui/core";
import sizes from "../../styles/constants/MediaQueries";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent:'center',
    width: 'fit-content',
    [sizes.down('sm')]: {
      flexDirection: 'column'
    }
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogContentText: {
    padding: '1em 2em 0 2em'
  },
  dialogForms: {
    display: 'flex',
    justifyContent: 'space-between',
    [sizes.down('sm')]: {
      flexDirection: 'column'
    }
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem'
  },
  input: {
    width: '480px',
    marginBottom: '0.5em',
    [sizes.down('sm')]: {
      width: '100%'
    }
  },
  button: {
    [sizes.down('sm')]: {
      marginLeft: '105px'
    }
  }
})