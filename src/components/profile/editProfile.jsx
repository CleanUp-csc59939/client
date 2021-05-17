import { React, useState } from 'react';
import { FormWeb } from './Form';
import userService from '../../services/user.service';
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import ProfilePic from './profilePic';
import './editProfile.css';
// import { useHistory } from 'react-router-dom';
// import { Button } from 'antd';

// import "bootstrap/dist/css/bootstrap.min.css";
const getUserID = () => {
  const user = AuthService.getCurrentUser();
  console.log('User profile loaded');
  return user;
};

const updateProfile = async (id, name, bio, location, number) => {
  const a = await userService.updateUserProfile(id, name, bio, location, number);
  return a;
};

const getProfile = async (id) => {
  const a = await userService.getUserProfile(id);
  return a;
};

export default function EditProfile() {
  const [content, setContent] = useState('');
  const history = useHistory();

  const currentUser = getUserID();
  // const history = useHistory();
  if (currentUser && content === '') {
    getProfile(currentUser.id).then((response) => {
      setContent(response.data);
      console.log(response.data.img);
    });
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    updateProfile(
      currentUser.id,
      values.name ? values.name : content.name, // name
      values.bio ? values.bio : content.bio, // bio
      values.location ? values.location : content.location,
      values.number ? values.number : content.number,
    ).then(
      () => {
        console.log('Success:', values);
        history.push('/profile');
        window.location.reload();
      },
      () => {
        onFinishFailed('Form unable to submit');
        console.log(values);
      },
    );
  };

  return (
    <div>
      <p>{content.name}</p>
      <p>{currentUser.email}</p>
      <p>{content.bio}</p>
      <p>{content.location}</p>
      <p>{content.number}</p>

      <h1 style={{ textAlign: 'center' }}>Update Profile</h1>
      <div className='web'>
        {content && currentUser ? <ProfilePic currentImg={content.img} id={currentUser.id} /> : null}
        <FormWeb onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </div>
    </div>
  );
}
