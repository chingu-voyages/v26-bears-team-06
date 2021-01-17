import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2.5rem'
  },
  hero: {
    height: '40vh',
    width: '80vw',
    backgroundImage: 'url(https://images.unsplash.com/photo-1558951387-a66e89fbf8df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '10px',
  }
})