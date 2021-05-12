import axios from 'axios';
import authHeader from './auth-header';

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

export default {
  getUserProfile,
  updateUserProfile,
};
