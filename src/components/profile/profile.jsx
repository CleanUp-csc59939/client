import { React, useState } from 'react';
// import { Avatar } from 'antd';
import userService from '../../services/user.service';
import AuthService from '../../services/auth.service';
import './profile.css';

// import "bootstrap/dist/css/bootstrap.min.css";
const getUserID = () => {
  const user = AuthService.getCurrentUser();
  console.log('User profile loaded');
  return user;
};

const getProfile = async (id) => {
  const a = await userService.getUserProfile(id);
  return a;
};

/**
 *
 * return Profile page*
 * @component
 * @return  {Component}            Return Profile page populated with the user's details
 */
const Profile = () => {
  const [content, setContent] = useState('');
  const currentUser = getUserID();
  if (currentUser && content === '') {
    getProfile(currentUser.id).then((response) => {
      setContent(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className='main'>
      <div className='row'>
        <div className='card'>
          <a href='image.html'>
            <img id='i1' alt='' src={content.img} width='200' />{' '}
          </a>
          <br />
          <h3>Name: {content.name}</h3>
          <br />
          <br />
          <h3>Bio: {content.bio}</h3>
          <br />
          <br />
          <h3>Email: {currentUser.email}</h3>
          <br />
          <br />
          <h3>Phone: {content.number}</h3>
          <br />
          <br />
          <h3>Location: {content.location}</h3>
          <br />
          <h1>
            <a href='/profile/edit' className='myButton'>
              Update Information
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Profile;