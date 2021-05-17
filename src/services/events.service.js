import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://cleanup-312620-ve6aqjr5zq-ue.a.run.app/api';

// To grab data from the backend, but backend needs to be reconfigured to have the /login return user id in the JSON

const getEvents = () => {
  console.log(`getting all events`);
  return axios.get(`${API_URL}/event/`, { headers: authHeader() });
};

const getSingleEvent = (eventID) => {
  return axios.get(`${API_URL}/event/${eventID}`, { headers: authHeader() });
};

const createEvent = (EvUserID, EvName, EvDesc, EvLocation, EvDate, EvType) => {
  return axios.post(`${API_URL}/event/`, {
    headers: authHeader(),
    userID: EvUserID,
    name: EvName,
    location: EvLocation,
    desc: EvDesc,
    date: EvDate,
    type: EvType,
  });
};

const editEvent = (eventID, EvName, EvDesc, EvLocation, EvDate, EvType) => {
  return axios.patch(`${API_URL}/event/${eventID}`, {
    headers: authHeader(),
    name: EvName,
    location: EvLocation,
    desc: EvDesc,
    date: EvDate,
    type: EvType,
  });
};

const uploadEventPic = (inputFile, eventID) => {
  console.log(`service id ${eventID}`);
  const data = new FormData();
  data.append('file', inputFile);

  return axios.patch(`${API_URL}/event/${eventID}/addimage`, data, {
    headers: {
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s',
    },
  });
};

const deleteEvent = (eventID) => {
  return axios.delete(`${API_URL}/event/${eventID}`, { headers: authHeader() });
};

const joinEvent = (eventID, user) => {
  return axios.patch(`${API_URL}/event/${eventID}/register`, { headers: authHeader(), userID: user });
};

const leaveEvent = (eventID, user) => {
  return axios.patch(`${API_URL}/event/${eventID}/unregister`, { headers: authHeader(), userID: user });
};

const updateSearch = (eventObject) => {
  console.log('EVENT OBJECT ', eventObject);
  fetch('http://3.139.65.222/indexes/events/documents', {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(eventObject),
  }).then((res) => {
    if (!res.ok) {
      console.log(res.status);
      console.log(res.message);
    }
  });
};

export default {
  getEvents,
  createEvent,
  getSingleEvent,
  editEvent,
  deleteEvent,
  uploadEventPic,
  joinEvent,
  leaveEvent,
  updateSearch,
};
