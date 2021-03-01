import React, { useEffect } from 'react';
// Components:
import EditPostInfo from '../../components/edit-post-info/EditPost';
// Material UI:
import Button from '@material-ui/core/Button';
import { useStyles } from './PostContainer.styles';
// Redux:
import { openSnackbar } from '../../redux/snackbars/snackbarsActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../redux/store';
import { postState } from '../../redux/post/postReducer';
import { userState } from '../../redux/user/userReducer';
import { deletePost, getPost } from '../../redux/post/postActions';
interface Props {
  match: any,
  history: any
}

const PostContainer: React.FC<Props> = ({match, history}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector<RootStore, postState['currentPost']>(state => state.post.currentPost);
  const currentUser = useSelector<RootStore, userState['currentUser']>(state => state.user.currentUser);
  const token = useSelector<RootStore, userState["token"]>((state) => state.user.token);
  console.log('POST:', post)
  const {title, image_url, city, state, description, price, user, user_id } = post;
  
  
  useEffect(() => {
    dispatch(getPost(match.params.postId))
  }, []);

  const handleClick = () => {
    dispatch(openSnackbar('Opening third party email service', 'success'));
    window.location.href = `mailto:${user?.email}`;
  };

  const handleDelete = () => {
    dispatch(deletePost(post.post_id, token));
    history.push(`/user/${currentUser.user_id}`)
  };

  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div className={classes.root}>
      <div className={classes.titleSection}>
        <h1>{title}</h1>
        <Button variant='contained' color='primary' onClick={handleClick}>Reply</Button>
      </div>
      <img 
        className={classes.image}
        src={image_url} alt="" />
      <div className={classes.locationPrice}>
        <span>{capitalize(city)} {capitalize(state)}</span>
        <span>{price}</span>
      </div>
      <div className={classes.bottomSection}>
        <p className={classes.description}>{description}</p>
        <div>
          <Button variant='contained' href='/'>Go Back</Button>
          {
            currentUser.user_id === user_id &&
            <div className={classes.postButtons}>
              <EditPostInfo />
              <Button variant='contained' color='secondary' onClick={handleDelete}>Delete</Button>
            </div>
          }
        </div>
      </div>
    </div>
  )  
};

export default PostContainer;