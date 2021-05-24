import userService from '../services/user.service';

const weekdayMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

export const ConvertDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const weekday = dateObj.getUTCDay();
  const localTime = dateObj.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  // const newdate = `${month}/${day}, ${localTime}`;
  const newdate = `${weekdayMap[weekday]}, ${month}/${day} ${localTime}`;
  return newdate;
};

export const GetProfile = async (id) => {
  const a = await userService.getUserProfile(id);
  return a;
};

export const matchEventAndUser = (event, profile) => {
  for (let i = 0; i < event.registered.length; i += 1) {
    if (event.registered[i].userID === profile.userID) {
      console.log('user matches');
      return true;
    }
  }
  console.log('user not matches');
  return false;
};
