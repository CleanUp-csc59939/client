import {React, useState} from 'react';
import userService from '../../services/user.service';
import AuthService from '../../services/auth.service';


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

export default function Profile() {
  const [content, setContent] = useState("");
  const currentUser = getUserID();
  if (currentUser && content===""){  
  getProfile(currentUser.id).then((response) => {setContent(response.data); console.log(response.data);});
  }

  return (
    <div>
      <img src={content.img} alt="" />
  <p>{content.name}</p>
  <p>{currentUser.email}</p>
  <p>{content.bio}</p>
  <p>{content.location}</p>
  <p>{content.number}</p>
  
  <a href='/profile/edit'>Edit Profile</a>
  </div>
    );
}
