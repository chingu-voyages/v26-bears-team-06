import React from 'react';
// Material UI:
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// Router:
import { Link } from 'react-router-dom';
// Redux:
import { useDispatch, useSelector } from 'react-redux';
import { logoutCurrentUser } from '../../redux/user/userActions';
import { RootStore } from '../../redux/store';
import { userState } from '../../redux/user/userReducer';
import sizes from '../../styles/constants/MediaQueries';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      zIndex: 1,

    },
    paper: {
      marginRight: theme.spacing(2),
    },
    button: {
      [sizes.down('sm')]: {
        marginLeft: '85px'
      }
    }
  }),
);

export default function UserDropDown() {

  const dispatch = useDispatch();
  const currentUser = useSelector<RootStore, userState["currentUser"]>(state => state.user.currentUser);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = () => {
    dispatch(logoutCurrentUser());
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.button}
        >
          <AccountCircleIcon />
          Signed In
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link to={`/user/${currentUser?.user_id}`} style={{textDecoration: 'none', color: 'black'}}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                    <MenuItem onClick={handleLogout}>
                      <Link 
                        to='/' 
                        style={{color:'black', textDecoration: 'none'}}>
                          Logout
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}