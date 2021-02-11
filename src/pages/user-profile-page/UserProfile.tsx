import React from 'react';
import { useSelector } from 'react-redux';
import EditUserInfo from '../../components/edit-user-info/EditUserInfo';
import Navbar from '../../containers/navbar/Navbar';
import { RootStore } from '../../redux/store';
import { userState } from '../../redux/user/userReducer';

const UserProfile = () => {
  const currentUser = useSelector<RootStore, userState["currentUser"]>(state => state.user.currentUser);

  const capitalize = (s: string | undefined) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <div>
      <Navbar />
      <h1>Hi, {currentUser?.name}</h1>
      <div>
        <h2>User Info:</h2>
        <p>Name: {currentUser?.name}</p>
        <p>Email: {currentUser?.email}</p>
        <p>Address: {currentUser?.address ? currentUser.address : "N/A"}</p>
        <p>City: {capitalize(currentUser?.city)}</p>
        <p>State: {capitalize(currentUser?.state)}</p>
        <p>Zip: {currentUser?.zip}</p>
      </div>
      <EditUserInfo />
    </div>
  )
};

export default UserProfile;