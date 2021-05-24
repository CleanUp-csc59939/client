import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

const testUser = {
  userID: 15,
  name: null,
  bio: null,
  location: null,
  img: 'https://res.cloudinary.com/cleanup/image/upload/v1621121500/download_remvsp.png',
};

describe('Create Event', () => {
  it('should render correctly in "debug" mode', async () => {
    const component = shallow(<Home currentUser={testUser} debug />);
    expect(component).toMatchSnapshot();
  });
});
