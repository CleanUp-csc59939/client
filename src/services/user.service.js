import axios from 'axios';
import authHeader from './auth-header';
// import FormData from 'form-data';
// import fs from 'fs';

const API_URL = 'https://cleanup-312620-ve6aqjr5zq-ue.a.run.app/api';

// To grab data from the backend, but backend needs to be reconfigured to have the /login return user id in the JSON

const getUserProfile = (userID) => {
  console.log(`getting user id from user service  ${userID}`);
  return axios.get(`${API_URL}/profile/${userID}`, { headers: authHeader() });
};

const updateUserProfile = (userID, newname, newbio, newlocation, newnumber) => {
  return axios.patch(`${API_URL}/profile/${userID}`, {
    headers: authHeader(),

    name: newname,
    location: newlocation,
    bio: newbio,
    number: newnumber,
  });
};

const uploadProfilePic = (inputFile, userID) => {
  console.log(`service id ${userID}`);
  const data = new FormData();
  data.append('file', inputFile);

  return axios.patch(`${API_URL}/profile/${userID}/img`, data, {
    headers: {
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
    },
  });
};

export default {
  getUserProfile,
  updateUserProfile,
  uploadProfilePic,
};
