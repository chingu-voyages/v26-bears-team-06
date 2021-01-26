import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '3em',
    height: '12vh'
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    height: '70%'
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    borderTop: '1px solid #b8b7b6',
    borderBottom: '1px solid #b8b7b6',
    padding: '5px 0',
    height: '30%'
  },
  rightSide: {
    display: 'flex',
    width: '78%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    width: '18%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    backgroundImage: 'url(https://cdn.discordapp.com/attachments/795654989481377794/802002681568690246/M_rket_2.png)',
    backgroundPosition: 'center',
    width: '280px',
    height: '60px',
    borderRadius: '10px'
  },
  authLinksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  authLink: {
    textDecoration: 'none',
    color: 'black',
    padding: '0 5px',
    opacity: '0.65',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: '1'
    }
  },
  categoriesDropDownList: {
    display: 'flex',
    listStyle: 'none',
    width: '25%',
    justifyContent: 'space-between',
    padding: '0'
  },
});